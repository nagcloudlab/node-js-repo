import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';

@Module({
    imports: [
        TypeOrmModule.forFeature([Todo])
    ],
    providers: [TodosService, TodosResolver]
})
export class TodosModule { }
