import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  //importar una referencia local
  @ViewChild('miformulario') Miformulario!: NgForm;

  //valores por defecto del formulario
  initform = {
    producto: '',
    precio: 0,
    existencias: 0,
  };
  //metodo para guardar datos y reiniciar el formulario
  guardar() {
    console.log(this.Miformulario.value);
    this.Miformulario.resetForm({
      producto: 'algo',
      precio: 0,
      existencias: 0,
    });
  }

  //metodo para validar el tamaño de un texto
  //minlenght en el html requerido
  Minlength(): boolean {
    return (
      this.Miformulario?.controls.producto?.invalid &&
      this.Miformulario?.controls.producto?.touched
    );
  }
  validarnumero(): boolean {
    return (
      this.Miformulario?.controls.precio?.value <= 0 &&
      this.Miformulario?.controls.precio?.touched
    );
  }
}
