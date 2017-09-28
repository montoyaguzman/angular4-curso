import { Component } from '@angular/core';
import { RopaService } from '../servicios/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [RopaService]
})

export class HomeComponent {
  public titulo = 'Pagina Principal';

  constructor(
      private rs: RopaService
  ) {}

  ngOnInit() {
        console.log(this.rs.prueba());
  }
}
