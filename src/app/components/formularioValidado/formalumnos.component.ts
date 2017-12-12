import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators,} from '@angular/forms';


@Component({  selector: 'app-formalumnos', templateUrl: './formalumnos.component.html' })

export class FormalumnosComponent {
  public titulo_formalumnos = 'Formulario con validaciones';
  public heroForm: any;
  public nombre: string;
  public alterego: string;
  public poder: string;

  

}
