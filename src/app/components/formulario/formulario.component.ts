import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';


@Component({  selector: 'app-formulario', templateUrl: './formulario.component.html' })

export class FormularioComponent {
  @ViewChild('myButton') myButton: ElementRef;
  public titulo_formulario = 'Formularios de Prueba';
  public roleVal: any;
  public check: boolean;

  constructor(private renderer: Renderer2) {
    this.roleVal = '';
    this.check = false;
  }

  disable() {
    // this.myButton.nativeElement.setAttribute("disabled", "true"); //BAD PRACTICE
    this.renderer.setAttribute(this.myButton.nativeElement, 'disabled', 'true');
  }

  enable() {
   // this.myButton.nativeElement.removeAttribute("disabled"); //BAD PRACTICE
   this.renderer.removeAttribute(this.myButton.nativeElement, 'disabled');
  }

  validar() {
    if (this.check) {
      this.disable();
    }
    if (!this.check) {
      this.enable();
    }
  }

}
