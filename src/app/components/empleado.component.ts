import { Component } from '@angular/core'

/*Un decorador aporata funcionalidad a una clase, 
no es una funcion*/
@Component({
	selector: 'empleado',
	templateUrl: './empleado.component.html'
})

//deja usar la clase dentro de otro fichero
export class EmpleadoComponent{
	public titulo_empleado = 'Lista de empleados';
}