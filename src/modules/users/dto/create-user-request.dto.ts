import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserRequest {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @IsNotEmpty()
  password: string;
}
