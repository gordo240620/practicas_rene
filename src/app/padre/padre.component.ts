import { Component } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';



@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  mensaje: string = '';

  // Se emitió un str, es lo que recibimos
  recibirNotificacion(mensaje: string) {
  this.mensaje = mensaje;
  }
}
