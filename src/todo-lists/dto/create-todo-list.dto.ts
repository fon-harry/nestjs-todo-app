import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'
export class CreateTodoListDto {
  @ApiProperty({ description: 'The name of a TodoList', example: 'Goods to buy' })
  @IsString()
  readonly name: string
}
