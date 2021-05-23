import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursoService!: CursosService;

  constructor(private cursoServices: CursosService) {
    // this.cursoService = new CursosService();
    // this.cursoService = cursoServices;
  }

  ngOnInit(): void {
    this.cursos = this.cursoServices.getCursos();
  }

}
