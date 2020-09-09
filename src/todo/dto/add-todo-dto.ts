import { IsString, IsNotEmpty } from "class-validator";

export class AddTodoDto {

  @IsString()
  @IsNotEmpty()
  public readonly title: string;

  public constructor(opts?: Partial<AddTodoDto>) {
    Object.assign(this, opts);
  }

}