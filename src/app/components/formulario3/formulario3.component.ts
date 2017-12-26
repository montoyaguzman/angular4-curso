import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html'
})

export class Formulario3Component implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    /*this.form = fb.group({
      codigo: '',
      nombre: '',
      // contacto: fb.group({
      telefono: '',
      email: ''
      // })
    });*/
  }

  ngOnInit() {

  }

  registro() {

  }

}
