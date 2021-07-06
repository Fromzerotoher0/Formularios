import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  /*contructor para llamar al servicio para crear formularios
    -FormBuilder
  */
  constructor(private builder: FormBuilder) {}

  miformulario: FormGroup = this.builder.group({
    /*
    Validators para poner condicionales a los campos
    en el html se les debe asignar el campo con formcontrolname
    */
    nombre: [, [Validators.required, Validators.minLength(3)]],
    //metodo para definir un array con formularios reactivos
    favoritos: this.builder.array(
      [['metal gear'], ['wow']],
      Validators.required
    ),
  });

  // form control para añadir un nuevo valor al array de favoritos
  //para esto se debe crear por aparte del form group
  //se le asigna al input con [formcontrol]="nuevofavorito"
  nuevofavorito: FormControl = this.builder.control('', Validators.required);

  //metodo para validar campos , usando los validators
  validarcampo(campo: string) {
    return (
      this.miformulario.controls[campo].errors &&
      this.miformulario.controls[campo].touched
    );
  }
  //metodo para guardar y reiniciarl el formulario
  guardar() {
    if (this.miformulario.invalid) {
      this.miformulario.markAllAsTouched();
    } else {
      console.log(this.miformulario.value);
      this.miformulario.reset();
      this.favoritosarr.clear();
    }
  }
  //metodo para obtener los valores de un array con formularios reactivos
  get favoritosarr() {
    return this.miformulario.get('favoritos') as FormArray;
  }

  //metodo para agregar juegos favoritos
  agregarfavorito() {
    if (this.nuevofavorito.invalid) {
      return;
    } else {
      this.favoritosarr.push(
        new FormControl(this.nuevofavorito.value, Validators.required)
      );
      this.nuevofavorito.reset();
    }
  }
  //metodo para eliminar un elemento del array de favoritos
  borrarfavorito(i: number) {
    this.favoritosarr.removeAt(i);
  }
}
