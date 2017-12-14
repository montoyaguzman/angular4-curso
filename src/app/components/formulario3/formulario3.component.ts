import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './forbiddenName.directive';


@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html'
})

export class Formulario3Component {
  public titulo_formalumnos = 'Formulario con validaciones';
  public alumnosForm: any;
  public nombre: string;

  ngOnInit(): void {
    this.alumnosForm = new FormGroup({
      'name': new FormControl(this.nombre, [
        Validators.required,
        Validators.minLength(2),
        forbiddenNameValidator(/bobo/i) // <-- Here's how you pass in the custom validator.
      ]),
    });
  }

  registro() {

  }


}
