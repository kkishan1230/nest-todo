import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto, UserCredDto } from 'src/users/users.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signIn(@Body() userCred: UserCredDto) {
    return this.authService.signIn(userCred);
  }

  @Post('register')
  register(@Body() registerUser: RegisterUserDto) {
    return registerUser;
  }
}
