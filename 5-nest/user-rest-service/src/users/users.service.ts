import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    createUser(createuserDto: CreateUserDto): Promise<User> {
        const userEntity = this.userRepository.create(createuserDto)
        return this.userRepository.save(userEntity); // insert into user values() 
    }
    getUser(id: number): Promise<User> {
        return this.userRepository.findOne(id) // select * from user where id=?
    }

    getUsers(): Promise<User[]> {
        return this.userRepository.find() // select * from user;
    }

}
