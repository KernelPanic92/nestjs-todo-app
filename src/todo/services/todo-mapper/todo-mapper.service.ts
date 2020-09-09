import { Injectable } from '@nestjs/common';
import { Todo } from '../../entities';
import { TodoDto } from '../../dto';

@Injectable()
export class TodoMapperService {

  public modelToDto({ id, title, completed }: Todo): TodoDto {
    return new TodoDto({ id, title, completed });
  }

}
