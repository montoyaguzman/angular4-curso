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
	
	private nombre:string;
	private apellido:string;
	private edad:number;
	private mayorDeEdad:boolean = true;
	// private trabajos:Array<string> = ['Tester','Web Developer','Senior'];
	// private valores:Array<any> = [22,'Web Developer','Senior'];
	private comodin:any = 23;

	constructor(){
		//console.log(this.comodin);
		//console.log(this.trabajos);
		this.nombre = "Jose Montoya";
		this.edad = 23;
		this.mayorDeEdad = false;
		this.comodin = "SI";
		//this.saludar(this.nombre);
	}

	ngOnInit(){
		this.cambiarNombre();
		this.cambiarEdad(45);
		console.log(this.nombre + " - "+this.edad);

		//Alcanze de las variables
		var num1 = 8;
		var num2 = 15;

		if (num1 === 8){
			let num1 = 3;
			var num2 = 88;
			console.log("Dentro del IF Num1:-->"+num1);
			console.log("Dentro del IF Num2:-->"+num2);
		}
		console.log("Fuera del IF Num1:-->"+num1);
		console.log("Dentro del IF Num2:-->"+num2);

	}

	saludar(nombre){
		console.log("Hola mundo "+nombre);
	}

	cambiarNombre(){
		this.nombre = 'Cin Leon';
	}

	cambiarEdad(edad){
		this.edad = edad;
	}
}