import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';


@Component({  selector: 'app-formulario', templateUrl: './formulario.component.html' })

export class FormularioComponent {
  @ViewChild('op1') op1: ElementRef;
  @ViewChild('op2') op2: ElementRef;
  @ViewChild('op3') op3: ElementRef;
  @ViewChild('op4') op4: ElementRef;
  public titulo_formulario = 'Formularios de Prueba';
  public roleVal: any;
  public check: boolean;
  public bandera: boolean;

  constructor(private renderer: Renderer2) {
    this.roleVal = '';
    this.check = false;
    this.bandera = false;
  }

  /*disable()
    this.renderer.setAttribute(this.myButton.nativeElement, 'disabled', 'true');

  enable()
   this.renderer.removeAttribute(this.myButton.nativeElement, 'disabled');*/

  validar() {
    if (!this.bandera) {
      this.renderer.setAttribute(this.op2.nativeElement, 'checked', 'checked');
      this.renderer.setAttribute(this.op3.nativeElement, 'disabled', 'true');
      this.renderer.setAttribute(this.op4.nativeElement, 'disabled', 'true');
    }
    if (this.bandera) {
      this.renderer.removeAttribute(this.op2.nativeElement, 'checked');
      this.renderer.removeAttribute(this.op3.nativeElement, 'disabled');
      this.renderer.removeAttribute(this.op4.nativeElement, 'disabled');
    }

      this.bandera = !this.bandera;

  }

}
