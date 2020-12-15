import { Module } from '@nestjs/common'
import { TodoListsService } from './todo-lists.service'
import { TodoListsController } from './todo-lists.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodoList } from './entities/todo-list.entity'
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TypeOrmModule.forFeature([TodoList]), TodosModule],
  controllers: [TodoListsController],
  providers: [TodoListsService]
})
export class TodoListsModule {}
