import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Indica la etiqueta en la que se cargara el componente
  templateUrl: './app.component.html', //Asignar una vista
  styleUrls: ['./app.component.css'] //Asociar ficheros CSS, solo es visible desde aqui
})
export class AppComponent {
  title = 'app';
}
