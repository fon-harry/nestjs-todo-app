import { ApiProperty } from '@nestjs/swagger'
import { IsNumberString, IsString } from 'class-validator'

export class CreateTodoDto {
  @ApiProperty({ description: 'The id of a TodoList', example: '15' })
  @IsNumberString()
  todoListId: number

  @ApiProperty({ description: 'The text of a Todo', example: 'Buy butter' })
  @IsString()
  readonly text: string
}
