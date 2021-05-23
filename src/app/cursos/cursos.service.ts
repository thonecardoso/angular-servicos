import {Injectable} from '@angular/core';

@Injectable()
export class CursosService {

  cursos = ['Angular 2', 'Java', 'PHP'];

  constructor() {
    console.log('CursosService');
  }

  getCursos(): Array<string> {
    return this.cursos;
  }

  addCurso(curso: string): void {
    this.cursos.push(curso);
  }
}
