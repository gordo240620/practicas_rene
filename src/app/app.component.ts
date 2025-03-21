import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';

import { ComponenteInlineComponent } from './componente-inline/componente-inline.component';

import { PadreComponent } from './padre/padre.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';

@Component({
  selector: 'app-root',
  imports: [
   RouterOutlet,
   NuevoComponenteComponent,
   ComponenteInlineComponent,
   PadreComponent,
   MostrarMensajeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Event Binding en Angular';
}
