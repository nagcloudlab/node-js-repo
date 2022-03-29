import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {

    constructor(
        @InjectRepository(Todo) private todoRepository: Repository<Todo>
    ) { }

    createTodo(createTodoDto: CreateTodoDto) {
        const todoEntity = this.todoRepository.create(createTodoDto);
        return this.todoRepository.save(todoEntity)
    }
    getTodo(id: number) {
        return this.todoRepository.findOne(id)
    }
    getTodos() {
        return this.todoRepository.find()
    }

}
