import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface persona {
  nombre: string;
  favoritos: favorito[];
}
interface favorito {
  nombre: string;
  id: number;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  //decorador para controlar el formulario con su referencia local
  @ViewChild('miformulario') Miformulario!: NgForm;

  //funcion para agregar juegos
  nuevo_juego: string = '';
  agregar() {
    const nuevofavorito: favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevo_juego,
    };
    this.persona.favoritos.push({ ...nuevofavorito });
    this.nuevo_juego = '';
  }

  //objeto para guardar juegos
  persona: persona = {
    nombre: 'anderson',
    favoritos: [
      { nombre: 'smash bros', id: 1 },
      { nombre: 'lol', id: 2 },
      { nombre: 'wow', id: 3 },
    ],
  };

  //funcion para validar un campo de texto
  Minlength(): boolean {
    return (
      this.Miformulario?.controls.nombre?.invalid &&
      this.Miformulario?.controls.nombre?.touched
    );
  }

  guardar() {
    console.log('formulario posteado');
  }

  eliminar(i: number) {
    this.persona.favoritos.splice(i, 1);
  }
}
