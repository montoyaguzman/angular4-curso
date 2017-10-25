import { Component } from '@angular/core';
import { Coche } from './Coche';
import { PeticionesService } from '../servicios/peticiones.services';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]
})

export class CochesComponent {
  public cochetoArray: Coche;
  public coche1: Coche;
  public coche2: Coche;
  public arregloCoches: Array<Coche>;
  public articulos;

  constructor(
    private petserv: PeticionesService
  ) {
    
    // Array de Coches
    this.cochetoArray = new Coche('', '', '','');
    this.arregloCoches = [
      new Coche('Jag95', 'Jaguar', '1234', 'amarillo'),
      new Coche('Merz23', 'Mercedez', '4789', 'rojo'),
      new Coche('Lam21', 'Lamborghini', '2167', 'azul')
    ];

    // 
    this.coche1 = new Coche('', '', '', '');
    console.log("Coche1 (vacio):" + this.coche1.nombre);

    this.coche2 = new Coche('Nom', '', '');
    console.log("Coche2 (vacio):" + this.coche2.nombre);

    /*this.coche1 = new Coche();
    this.coche1.nombre = "Jaguar";
    this.coche1.marca = "adsgadgds";
    this.coche1.modelo = "sdvw";
    this.coche1.color = "agcufsvsvar";
    console.log("Coche 1:" + this.coche1.nombre);*/

  }

  ngOnInit() {
    // Peticion a Articulos
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
    this.arregloCoches.push(this.cochetoArray);
    this.cochetoArray = new Coche('', '', '', '');
  }

}
