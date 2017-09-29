import {Inject, Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PeticionesService {
  public url: string;

  constructor(private http:Http) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPrueba() {
    return 'Hola mundo';
  }

  getArticulos() {
    return this.http.get(this.url).map(resp => resp.json());
  }

}
