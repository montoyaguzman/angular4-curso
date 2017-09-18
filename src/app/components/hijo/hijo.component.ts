import {Component, Input} from '@angular/core';

@Component({

	selector: 'comp-hijo',
	templateUrl: './hijo.component.html'
})

export class HijoComponent{

	public titleHijo: string;
	@Input() nombre: string;
	@Input('app') apellido: string;

	constructor(){
		this.titleHijo = "Componente hijo";
	}
}