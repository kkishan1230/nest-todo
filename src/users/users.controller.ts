import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto, UserCredDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUser() {
    return { userName: 'kishan' };
  }
}
