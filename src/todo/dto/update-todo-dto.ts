import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateTodoDto {

  @IsString()
  @IsNotEmpty()
  public readonly title: string;

  @IsBoolean()
  public readonly completed: boolean;

  public constructor(opts?: Partial<UpdateTodoDto>) {
    Object.assign(this, opts);
  }

}