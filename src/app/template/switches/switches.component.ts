import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent {
  @ViewChild('miformulario') miformulario!: NgForm;

  persona = {
    genero: '',
    notificaciones: false,
  };

  terminos: boolean = false;

  validarterminos(): boolean {
    return this.miformulario?.controls.terminos?.invalid;
  }
}
