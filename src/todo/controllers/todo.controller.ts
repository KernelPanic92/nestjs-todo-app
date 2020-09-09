import { UpdateTodoDto } from './../dto/update-todo-dto';
import { TodoService } from './../services/todo/todo.service';
import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';
import { TodoDto, AddTodoDto } from './../dto';

@Controller('todos')
export class TodoController {

  public constructor(private readonly todoService: TodoService) {}

  @Get()
  public findAll(): Promise<TodoDto[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: number): Promise<TodoDto> {
      return this.todoService.findOne(id);
  }

  @Put(':id')
  public async edit(@Param('id') id: number, @Body() todo: UpdateTodoDto): Promise<TodoDto> {
      return this.todoService.edit(id, todo);
  }

  @Post()
  public async add(@Body() todo: AddTodoDto): Promise<TodoDto> {
      return this.todoService.add(todo);
  }

  @Delete(':id')
  public async remove(@Param('id') id: number): Promise<TodoDto> {
      return this.todoService.remove(id);
  }

}
