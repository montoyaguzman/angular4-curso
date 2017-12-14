import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS } from '@angular/forms';

function verificarEspacios(texto: AbstractControl) {
  console.log(texto);
  if (texto.value == null) { return null; }
  if (texto.value.indexOf(' ') >= 0) {
    return {sinEspacios: true};
  }
    return null;
}

/*function verificarEspacios(texto: AbstractControl) {
  let sinEspacios = false;
  if (texto.value.indexOf(' ') >= 0) {
    sinEspacios = true;
  }
  return sinEspacios;
}*/

@Directive({
  selector: '[sinEspacios]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: verificarEspacios }
  ]
})

export class Validaciones { }
