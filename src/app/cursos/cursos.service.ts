import {Injectable} from '@angular/core';

@Injectable()
export class CursosService {

  getCursos(): Array<string> {
    return ['Angular 2', 'Java', 'PHP'];
  }
}
