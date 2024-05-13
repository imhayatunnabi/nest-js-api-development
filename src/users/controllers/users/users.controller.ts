import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers('/') {
        return { username: 'imhayatunnabi', email: 'imhayatunnabi@gmail.com' }
    }
    
}
