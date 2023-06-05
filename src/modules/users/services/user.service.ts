import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { CreateUserRequest, UpdateUserRequest } from '../dto';
import { User, UserKey } from '../dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModel: Model<User, UserKey>,
  ) {}

  create(dto: CreateUserRequest) {
    return this.userModel.create({ id: uuidv4(), ...dto });
  }

  update(id: string, user: UpdateUserRequest) {
    return this.userModel.update({ id }, user);
  }

  getById(id: string) {
    return this.userModel.get({ id });
  }

  findAll() {
    return this.userModel.scan().exec();
  }

  delete(id: string) {
    return this.userModel.delete({ id });
  }
}
