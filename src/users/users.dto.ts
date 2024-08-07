import { IsNotEmpty, IsString } from 'class-validator';

export class UserCredDto {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class RegisterUserDto extends UserCredDto {
  @IsString()
  @IsNotEmpty()
  email: string;
}
