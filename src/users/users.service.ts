import { HttpStatus, Injectable } from '@nestjs/common';
import { UserCredDto } from './users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: UsersRepository,
  ) {}
}
