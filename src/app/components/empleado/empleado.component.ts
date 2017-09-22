import { Component } from '@angular/core';
import { Empleado } from './empleado';

/*Un decorador aporata funcionalidad a una clase,
no es una funcion*/
@Component({  selector: 'app-empleado', templateUrl: './empleado.component.html' })

// deja usar la clase dentro de otro fichero
export class EmpleadoComponent {
	public titulo_empleado = 'Componente empleados';
	public empleado: Empleado;
	public trabajadores: Array<Empleado>;
	public trabajadorExterno: boolean;
	public color: string;

	ngOnInit() {
		this.empleado = new Empleado('Jose Montoya', 45, 'Desarrollador .NET', true);
		// console.log(this.empleado);
		this.trabajadores = [
			new Empleado('Miguel Macias', 45, 'Spring newbie', false),
			new Empleado('Cin Leon', 30, 'Scrum Master', false),
			new Empleado('Jazmin Cahuatzi', 22, 'Java Jr.', false)
		]

		this.trabajadorExterno = false;
		this.color = 'blue';
	}

	cambiarExterno(valor) {
		this.trabajadorExterno = valor;
	}
}
