import { Injectable } from '@nestjs/common'
import { CreateTodoListDto } from './dto/create-todo-list.dto'

@Injectable()
export class TodoListsService {
  create(createTodoListDto: CreateTodoListDto) {
    return `This action adds a new todoList: ${createTodoListDto.name}`
  }

  findOne(id: number) {
    return `This action returns a #${id} todoList`
  }
}
