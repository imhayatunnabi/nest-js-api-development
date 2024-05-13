import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
    // get all users data routes
    @Get('/index')
    getUsers() {
        return { username: 'imhayatunnabi', email: 'imhayatunnabi@gmail.com' }
    }
    //post a user to create a users
    @Post('/store')
    // createUser(@Req() request: Request, @Res() response: Response) {
    createUser(@Body() userData: CreateUserDto) {
        // console.log(request.body);
        console.log(userData);
        // response.send('User has been created');
        return {message: 'User has been created', data: userData};
    }


}
