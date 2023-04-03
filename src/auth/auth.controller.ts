import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUser, Auth } from './decorators';
import { RegisterUserDTO, LoginUserDTO, CreateUserDTO } from './dto';
import { User } from './entities/user.entity';
import { ValidRoles } from './interfaces/valid-roles';



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() registerUserDTO: RegisterUserDTO) {
    return this.authService.register(registerUserDTO);
  }
  
  @Post('login')
  loginUser(@Body() loginUserDTO: LoginUserDTO) {
    return this.authService.login(loginUserDTO);
  }

  @Post('create')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  createUser(@Body() createUserDTO: CreateUserDTO) {
    return this.authService.create(createUserDTO);
  }

  @Get('refresh-token')
  @Auth()
  refreshToken(
    @GetUser() user: User
  ){
    return this.authService.refreshToken( user );
  }
  
  @Get('users')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  privateRoute3(@GetUser() user: User){
    return user;
  }

}
