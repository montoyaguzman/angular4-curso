import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './forbiddenNama.directive';


@Component({
  selector: 'app-formalumnos',
  templateUrl: './formalumnos.component.html'
})

export class FormalumnosComponent {
  public titulo_formalumnos = 'Formulario con validaciones';
  public alumnosForm: any;
  public nombre: string;

  ngOnInit(): void {
    this.alumnosForm = new FormGroup({
      'name': new FormControl(this.nombre, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bobo/i) // <-- Here's how you pass in the custom validator.
      ]),
      // 'alterEgo': new FormControl(this.hero.alterEgo),
      // 'power': new FormControl(this.hero.power, Validators.required)
    });
  }

  registro() {

  }


}
