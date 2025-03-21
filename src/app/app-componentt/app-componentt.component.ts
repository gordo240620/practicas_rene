import { Component } from '@angular/core';

@Component({
  selector: 'app-app-componentt',
  imports: [],
  templateUrl: './app-componentt.component.html',
  styleUrl: './app-componentt.component.css'
})
export class AppComponenttComponent {
  titulo = 'UTS';
  usuario = {
  nombre: 'Rene Hernandez',
  edad: 27
  };
    saludar() {
    return `Hola, ${this.usuario.nombre}`;
  }
}

