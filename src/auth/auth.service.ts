import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO, LoginUserDTO } from './dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
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
      return user;
      //TODO: Retornar el JWT
    } catch (error) {
      this.handleDBErrors(error)
    }    
  }

  async login( loginUserDTO: LoginUserDTO ){
    const { password, email } = loginUserDTO;
    const user = await this.userRepository.findOne({
      where: { email },
      select: { email: true, password: true } 
    });
    if ( !user )
      throw new UnauthorizedException('Credentials are not valid (email)');
    if ( !bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Credential are not Valid (password)');
    return user;
    //TODO: Retornar el JWT
  }

  private handleDBErrors( error: any ): never {
    if ( error.code === '23505')
      throw new BadRequestException( error.detail );
    console.log(error)
    throw new InternalServerErrorException('Please check server logs');
  }

}
