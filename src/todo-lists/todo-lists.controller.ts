import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common'
import { TodoListsService } from './todo-lists.service'
import { CreateTodoListDto } from './dto/create-todo-list.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Todo lists')
@Controller('api/todo-lists')
export class TodoListsController {
  constructor(private readonly todoListsService: TodoListsService) {}

  @Post()
  create(@Body() createTodoListDto: CreateTodoListDto) {
    return this.todoListsService.create(createTodoListDto)
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.todoListsService.findOne(id)
  }
}
