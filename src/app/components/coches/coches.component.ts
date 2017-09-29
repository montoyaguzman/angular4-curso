import { Component } from '@angular/core';
import { Coche } from './Coche';
import { PeticionesService } from '../servicios/peticiones.services';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]
})

export class CochesComponent {
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos;

  constructor(
    private petserv: PeticionesService
  ) {
    this.coche = new Coche('', '', '', '');
    this.coches = [
      new Coche('Jag95', 'Jaguar', '1234', 'amarillo'),
      new Coche('Merz23', 'Mercedez', '4789', 'rojo'),
      new Coche('Lam21', 'Lamborghini', '2167', 'azul')
    ];
  }

  ngOnInit() {
    // console.log('en init');
    // console.log(this.petserv.getPrueba());
    this.petserv.getArticulos().subscribe(
      result => {
        this.articulos = result;
        console.log(result);
      },
      error => {
        const errorMessage = <any>error;
        console.log(errorMessage);
      }
    );
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche('', '', '', '');
  }

}
