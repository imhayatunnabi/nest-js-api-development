import { Body, Controller, Get, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    // get all users data routes
    @Get('/index')
    getUsers(@Query('sortBy') sortBy: string,
        @Query('sortDirection') sortDirection: string,
        @Query('page') page: number,
        @Query('search') search: string) {
        return this.usersService.getUsers(sortBy, sortDirection, page, search)
    }
    //post a user to create a users
    @Post('/store')
    @UsePipes(new ValidationPipe())
    // createUser(@Req() request: Request, @Res() response: Response) {
    createUser(@Body() userData: CreateUserDto) {
        // console.log(request.body);
        console.log(this.usersService.createUser(userData));
        // response.send('User has been created');
        return { message: 'User has been created', data: userData };
    }
    // get one user by id route
    @Get('/find/:id')
    findUser(@Req() request: Request, @Res() response: Response) {
        const userId = request.params.id;
        console.log(`Requested user ID: ${userId}`);
        const userData = {
            id: userId,
            username: 'imhayatunnabi',
            email: 'imhayatunnabi@gmail.com'
        };
        return response.json({ message: `User details retrieved successfully`, data: userData });
    }


}
