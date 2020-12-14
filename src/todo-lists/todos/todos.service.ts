import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { Todo } from './entities/todo.entity'

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) {}

  async findOne(id: number) {
    const todo = await this.todoRepository.findOne(id, {
      relations: ['todoList']
    })
    if (!todo) {
      throw new NotFoundException(`Todo #${id} not found`)
    }
    return todo
  }

  // TODO
  create(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepository.create(createTodoDto)
    return this.todoRepository.save(todo)
    // return 'This action adds a new todo'
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.preload({
      id,
      ...updateTodoDto
    })
    if (!todo) {
      throw new NotFoundException(`Todo #${id} not found`)
    }
    return this.todoRepository.save(todo)
  }

  async remove(id: number) {
    const todo = await this.findOne(id)
    return this.todoRepository.remove(todo)
  }
}
