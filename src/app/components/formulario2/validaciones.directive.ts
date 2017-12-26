import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS } from '@angular/forms';

function verificarEspacios(texto: AbstractControl) {
  if (texto.value == null) { return null; }
  if (texto.value.indexOf(' ') >= 0) {
    return {sinEspacios: true};
  }
    return null;
}

@Directive({
  selector: '[sinEspacios]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: verificarEspacios }
  ]
})

/*function minimoCaracteres(texto: AbstractControl) {
  if (texto.value == null) { return null; }
  if (texto.value.length > 2) {
    return {minimoCaracteres: true};
  }
  return null;
}

@Directive({
  selector: '[minimoCaracteres]',
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: minimoCaracteres }
  ]
})*/



export class Validaciones { }
