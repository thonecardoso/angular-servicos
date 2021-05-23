import {Injectable, EventEmitter} from '@angular/core';
import {LogService} from '../shared/log.service';

@Injectable()
export class CursosService {

  constructor(private logService: LogService) {
    console.log('CursosService');
  }

  static criouNovoCurso = new EventEmitter<string>();

  emitirCursoCriado = new EventEmitter<string>();

  private cursos = ['Angular 2', 'Java', 'PHP'];

  getCursos(): Array<string> {
    this.logService.consoleLog('Obtendo Lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string): void {
    this.logService.consoleLog(`Criando um novo curso: ${curso}` );
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
