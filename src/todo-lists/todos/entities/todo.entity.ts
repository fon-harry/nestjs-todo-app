import { ApiProperty } from '@nestjs/swagger'
import { TodoList } from 'src/todo-lists/entities/todo-list.entity'
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Todo {
  @ApiProperty({ example: '98' })
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ example: 'Buy candles' })
  @Column()
  text: string

  @ApiProperty({ example: '2020-12-14 08:38:53.746537' })
  @CreateDateColumn()
  createdAt: Date

  // TODO { nullable: false } not working
  @ManyToOne(type => TodoList, todoList => todoList.todos)
  todoList!: TodoList
}
