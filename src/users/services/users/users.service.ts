import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
    private fakeUsers = [
        { username: 'imhayatunnabi', email: 'imhayatunnabi@gmail.com' },
        { username: 'imhayatunnabi.pen', email: 'imhayatunnabi.pen@gmail.com' },
        { username: 'imhayatunnabi.en', email: 'imhayatunnabi.en@gmail.com' },
    ];
    getUsers(sortBy, sortDirection, page, search) {
        return this.fakeUsers;
    }
    createUser(userData: CreateUserDto) {
        return this.fakeUsers;
    }
}
