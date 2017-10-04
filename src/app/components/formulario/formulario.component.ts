import { Component } from '@angular/core';

@Component({  selector: 'app-formulario', templateUrl: './formulario.component.html' })

export class FormularioComponent {
	public titulo_formulario = 'Formularios de Prueba';
	public roleVal: any;

  constructor() {
    this.roleVal = '';
  }

  ngOnInit() {

  }

	prueba(){
    console.log('holaaaaa');



        this.roleVal = 'disabled';
  }


  
      
      
}
