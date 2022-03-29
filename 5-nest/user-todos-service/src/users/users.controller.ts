import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    async createUser(@Body() body: CreateUserDto): Promise<User> {
        return this.usersService.createUser(body)
    }
    @Get(":id")
    async getUser(@Param("id") id: string): Promise<User> {
        return this.usersService.getUser(parseInt(id))
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersService.getUsers()
    }

}
