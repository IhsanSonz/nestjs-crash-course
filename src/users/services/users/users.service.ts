import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

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

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userData: CreateUserType) {
    this.fakeUsers.push(userData);
    return;
  }

  fetchUserById(id: number) {
    return this.fakeUsers[id];
  }
}
