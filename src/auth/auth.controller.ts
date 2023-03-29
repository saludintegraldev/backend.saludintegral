import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUser, Auth } from './decorators';
import { RegisterUserDTO, LoginUserDTO } from './dto';
import { User } from './entities/user.entity';



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() registerUserDTO: RegisterUserDTO) {
    return this.authService.create(registerUserDTO);
  }
  
  @Post('login')
  loginUser(@Body() loginUserDTO: LoginUserDTO) {
    return this.authService.login(loginUserDTO);
  }
  
  @Get('create')
  @Auth()
  privateRoute3(@GetUser() user: User){
    return user;
  }

}
