import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  constructor(private builder: FormBuilder) {}

  /*miformulario: FormGroup = new FormGroup({
    nombre: new FormControl(),
    precio: new FormControl(),
    existencias: new FormControl(),
  });
  */
  miformulario: FormGroup = this.builder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  });

  validarcampo(campo: string) {
    return (
      this.miformulario.controls[campo].errors &&
      this.miformulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miformulario.invalid) {
      this.miformulario.markAllAsTouched();
    } else {
      console.log(this.miformulario.value);
      this.miformulario.reset();
    }
  }
}
