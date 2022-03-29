import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';
import { TodosService } from './todos.service';

@Resolver()
export class TodosResolver {

    constructor(private todosService: TodosService) { }

    @Query(() => [Todo])
    todos() {
        return this.todosService.getTodos()
    }

    @Query(() => Todo)
    todos_by_pk(@Args("id", { type: () => Int }) id: number) {
        return this.todosService.getTodo(id)
    }

    @Mutation(() => Todo)
    insert_todo_one(@Args("todoInput") todoInput: CreateTodoDto) {
        return this.todosService.createTodo(todoInput)
    }

}
