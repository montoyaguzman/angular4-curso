import { Injectable } from '@angular/core';


@Injectable()

export class RopaService {

  public nombrePrenda = 'Pantalones';
  public coleccionRopa = ['Zapatos', 'Saco', 'Camisa manga larga'];

  prueba(prenda) {
    // return this.nombrePrenda;
    return prenda;
  }

  agregaPrenda(prenda: string): Array <string> {
    this.coleccionRopa.push(prenda);
    return this.getCollecionRopa();
  }

  borrarPrenda(i: number) {
    this.coleccionRopa.splice(i, 1);
    return this.getCollecionRopa();
  }

  getCollecionRopa() {
    return this.coleccionRopa;
  }

}
