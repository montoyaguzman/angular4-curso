import { Component } from '@angular/core'

/*Un decorador aporata funcionalidad a una clase, 
no es una funcion*/
@Component({
	selector: 'fruta',
	/*template: `<h2>{{nombre_component}}</h2>
				<p>{{listado_frutas}}</p>
				`*/
	templateUrl: './fruta.component.html'
})

//deja usar la clase dentro de otro fichero
export class FrutaComponent{
	public nombre_component = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera, Sandia';
}