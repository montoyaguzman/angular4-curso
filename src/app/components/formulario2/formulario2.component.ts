import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html'
})

export class Formulario2Component implements OnInit {
  public nombre: string;

  constructor(
  ) {
    this.nombre = '';
  }

  ngOnInit() {

  }

  registro() {

  }

}
