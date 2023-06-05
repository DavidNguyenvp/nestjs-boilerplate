import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserRequest {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsOptional()
  firstName: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsOptional()
  lastName: string;

  @IsEmail()
  @IsOptional()
  email: string;
}
