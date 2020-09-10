export class TodoDto {

  public readonly id: number;
  public readonly title: string;
  public readonly completed: boolean;

  public constructor(opts?: Partial<TodoDto>) {
    Object.assign(this, opts);
  }

}