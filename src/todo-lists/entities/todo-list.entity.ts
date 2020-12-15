import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Todo } from '../todos/entities/todo.entity'

@Entity()
export class TodoList {
  @ApiProperty({ example: '5' })
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ example: 'Christmas to do list' })
  @Column()
  name: string

  @JoinTable()
  @OneToMany(type => Todo, todo => todo.todoList, { cascade: true })
  todos: Todo[]
}
