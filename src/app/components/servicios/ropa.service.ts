import { Injectable } from '@angular/core';

@Injectable()

export class RopaService {
  public nombrePrenda: String;

    prueba() {
      this.nombrePrenda = 'Pantalones';
      return this.nombrePrenda;
    }

}
