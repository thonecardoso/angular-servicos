import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class CursosService {

  constructor() {
    console.log('CursosService');
  }

  static criouNovoCurso = new EventEmitter<string>();

  emitirCursoCriado = new EventEmitter<string>();

  private cursos = ['Angular 2', 'Java', 'PHP'];

  getCursos(): Array<string> {
    return this.cursos;
  }

  addCurso(curso: string): void {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
