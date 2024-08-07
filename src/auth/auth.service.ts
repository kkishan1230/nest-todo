import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { UserCredDto } from 'src/users/users.dto';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: UsersRepository,
  ) {}

  isCreds(userCred: UserCredDto): Boolean {
    const { userName, password } = userCred;
    if (userName && password) return true;
    return false;
  }

  async isUserRegistered(userName: string): Promise<Boolean> {
    const userData = await this.usersRepository.findOneBy({ userName });
    if (!userData) {
      return false;
    }
    return true;
  }

  async signIn(userSignIn: UserCredDto): Promise<any> {
    if (!this.isCreds(userSignIn)) {
      return {
        status: HttpStatus.BAD_REQUEST,
        message: 'Username or password is missing',
      };
    }

    if (!this.isUserRegistered(userSignIn.userName)) {
      return { status: HttpStatus.NOT_FOUND, message: 'User not registered' };
    }
  }
}
