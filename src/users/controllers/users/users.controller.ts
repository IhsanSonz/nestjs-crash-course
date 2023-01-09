import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.fetchUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData.email);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: string) {
    console.log(id);
    return { id };
  }
}
