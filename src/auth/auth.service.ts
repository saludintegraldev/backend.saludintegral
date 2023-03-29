import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO, LoginUserDTO } from './dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'
import { JwtPayload } from './interfaces/jwt_payload.interface';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ){}

  async create(createUserDTO: CreateUserDTO) {    
    try {
      const { password, ...userData } = createUserDTO;
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync( password, 10 )
      });
      await this.userRepository.save( user )
      //TODO: Hacerlo de una manera mas elegante
      delete user.password;
      delete user.isActive;
      delete user.roles;
      return {
        ...user,
        token: this.getJwtToken({ id: user.id })
      };  
    } catch (error) {
      this.handleDBErrors(error)
    }    
  }

  async login( loginUserDTO: LoginUserDTO ){
    const { password, email} = loginUserDTO;
    const user = await this.userRepository.findOne({
      where: { email },
      select: { email: true, password: true, id: true } 
    });
    if ( !user )
      throw new UnauthorizedException('Credentials are not valid (email)');
    if ( !bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Credential are not Valid (password)');
      return {
        ...user,
        token: this.getJwtToken({ id: user.id })
      };   
  }

  private getJwtToken( payload: JwtPayload ){
    const token = this .jwtService.sign( payload );
    return token;    
  }

  private handleDBErrors( error: any ): never {
    if ( error.code === '23505')
      throw new BadRequestException( error.detail );
    console.log(error)
    throw new InternalServerErrorException('Please check server logs');
  }

}
