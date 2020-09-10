import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class EditTodoDto {

  @IsString()
  @IsNotEmpty()
  public readonly title: string;

  @IsBoolean()
  public readonly completed: boolean;

  public constructor(opts?: Partial<EditTodoDto>) {
    Object.assign(this, opts);
  }

}