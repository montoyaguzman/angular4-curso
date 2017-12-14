import {Component, OnInit} from '@angular/core';
import {RopaService} from '../servicios/ropa.services';


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
