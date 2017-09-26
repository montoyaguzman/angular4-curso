import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})

export class ContactoComponent {
  public titulo = 'Pagina de contacto';
  public parametro; 

  constructor(
  	private route: ActivatedRoute,
  	private router: Router
  ){}

  ngOnInit(){
  	this.route.params.forEach((params: Params) => {
  		this.parametro = params['page'];
  		console.log(params);
  	})
  }

  redirigir(){
  	this.router.navigate(['/app-contacto','montoya']);
  }
}
