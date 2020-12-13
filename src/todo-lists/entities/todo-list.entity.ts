import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class TodoList {
  @ApiProperty({ example: '5' })
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ example: 'Christmas to do list' })
  @Column()
  name: string
}
