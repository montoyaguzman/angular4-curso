import { Component } from '@angular/core';
import { RopaService } from '../servicios/ropa.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [RopaService]
})

export class HomeComponent {
  public titulo = 'Pagina Principal';
  public listadoRopa: Array<String>;
  public prendaAGuardar: string;
  public fechaPagina: Date;

  constructor(
      private rs: RopaService
  ) {}

  ngOnInit() {
      console.log(this.listadoRopa = this.rs.getCollecionRopa());
      console.log(this.rs.prueba('Camiseta'));

      this.fechaPagina = new Date(2017,11,26);

  }

  guardarPrenda() {
    this.rs.agregaPrenda(this.prendaAGuardar);
    this.prendaAGuardar = '';
  }

  eliminarPrenda(index: number) {
    this.rs.borrarPrenda(index);
  }

}
