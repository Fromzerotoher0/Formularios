import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    //definir valores por defecto al formulario
    this.miformulario.reset({ ...this.persona, condiciones: true });
  }

  miformulario: FormGroup = this.builder.group({
    genero: ['M', Validators.required],
    Notificaciones: [true, Validators.required],
    terminos: [true, Validators.requiredTrue],
  });

  persona = {
    genero: 'M',
    Notificaciones: true,
  };
}
