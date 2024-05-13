import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private fakeUsers = [{username: 'imhayatunnabi', email: 'imhayatunnabi.pen@gmail.com'}];
    getUsers(sortBy, sortDirection, page, search){
        return this.fakeUsers;
    }
}
