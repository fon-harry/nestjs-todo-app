import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateTodoListDto } from './dto/create-todo-list.dto'
import { TodoList } from './entities/todo-list.entity'

@Injectable()
export class TodoListsService {
  constructor(
    @InjectRepository(TodoList)
    private readonly todoListRepository: Repository<TodoList>
  ) {}

  create(createTodoListDto: CreateTodoListDto) {
    const todoList = this.todoListRepository.create(createTodoListDto)
    return this.todoListRepository.save(todoList)
  }

  findOne(id: number) {
    return this.todoListRepository.findOne(id)
  }
}
