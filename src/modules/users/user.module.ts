import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { UserController } from './user.controller';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './services';
import { UserProfile } from './user.profile';

@Module({
  imports: [DynamooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UserService, UserProfile],
  controllers: [UserController],
})
export class UserModule {}
