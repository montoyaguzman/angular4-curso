import { Component } from '@angular/core';
import { SuperHero } from './SuperHero';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html'
})

export class SuperHeroComponent {
	public titulo_superheros = 'Superheros';
	public hero: SuperHero;
	public heros: Array<SuperHero>;

  ngOnInit() {
    // this.hero = new SuperHero('Flash', 'DC', 'Speed Force');
    this.heros = [
      new SuperHero('Flash', 'DC', 'Speed Force'),
      new SuperHero('Iron Man', 'Marvel', 'Armadura'),
      new SuperHero('Cyclope', 'Marvel', 'Rayo Laser'),
      new SuperHero('Batman', 'DC', 'Es millonario'),
      new SuperHero ('Quick Silver', 'Marvel', 'Speed Force')
    ];

  }
}
