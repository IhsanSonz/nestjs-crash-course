import { Injectable } from '@nestjs/common';

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
}
