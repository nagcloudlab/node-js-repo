import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, UseFilters, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './entities/user.entity';
import { CleanUserInterceptor } from './interceptors/clean-user.interceptor';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(CleanUserInterceptor)
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserDto)
    }

    @Get(":id")
    async getUser(@CurrentUser() currentUser: string, @Param("id", ParseIntPipe) id: number): Promise<User> {
        const user = await this.usersService.getUser(id)
        if (user) return user;
        else throw new NotFoundException("user not found")
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersService.getUsers()
    }

}
