import { IsEmail, isNotEmpty, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
}