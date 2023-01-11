import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user.entity';
import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'Sonz',
      email: 'sonz@mail.com',
    },
    {
      username: 'Greg',
      email: 'greg@mail.com',
    },
    {
      username: 'Daren',
      email: 'daren@mail.com',
    },
  ];

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  fetchUsers() {
    return this.userRepository.find();
  }

  createUser(userData: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userData,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  fetchUserById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
}
