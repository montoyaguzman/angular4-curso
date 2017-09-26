import { Component } from '@angular/core';
import { SuperHero } from './superhero';

@Component({  selector: 'app-superhero', templateUrl: './superhero.component.html' })

export class SuperHeroComponent {
	public titulo_superheros = 'Superheros';
	public hero: SuperHero;
	public heros: Array<SuperHero>;

	ngOnInit() {}
		this.hero = new SuperHero('Flash', 'DC', 'Speed Force');
		//hero = new hero('Flash', 'DC', 'Speed Force');
		/*this.heros = [
			new heroe('Flash', 'DC', 'Speed Force'),
			new heroe('Iron Man', 'Marvel', 'Armadura'),
			new heroe('Cyclope', 'Marvel', 'Rayo Laser'),
			new heroe('Batman', 'DC', 'Es millonario'),
			new heroe('Quick Silver', 'Marvel', 'Speed Force'),
		]*/

	}
}
