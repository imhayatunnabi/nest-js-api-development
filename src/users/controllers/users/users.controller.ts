import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
    // get all users data routes
    @Get('/index')
    getUsers() {
        return { username: 'imhayatunnabi', email: 'imhayatunnabi@gmail.com' }
    }
    //post a user to create a users
    @Post('/store')
    createUser(@Req() request: Request, @Res() response: Response) {
        console.log(request.body);
        response.send('User has been created');
    }


}
