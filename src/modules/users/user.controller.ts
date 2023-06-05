import { MapInterceptor } from '@automapper/nestjs';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import {
  CreateUserRequest,
  UpdateUserRequest,
  UserResponse,
  User,
} from './dto';
import { UserService } from './services';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseInterceptors(MapInterceptor(UserResponse, User, { isArray: true }))
  get() {
    return this.userService.findAll();
  }

  @Get(':id')
  @UseInterceptors(MapInterceptor(UserResponse, User))
  getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @Post()
  @UseInterceptors(MapInterceptor(UserResponse, User))
  create(@Body() dto: CreateUserRequest) {
    return this.userService.create(dto);
  }

  @Put(':id')
  @UseInterceptors(MapInterceptor(UserResponse, User))
  update(@Param('id') id: string, @Body() dto: UpdateUserRequest) {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
