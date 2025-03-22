import { Component, Output, EventEmitter} from '@angular/core';
import { PadreComponent } from '../padre.component';


@Component({
  selector: 'app-hijo',
  imports: [PadreComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  mensaje: string = 'Mensaje desde el componente hijo';
  cambiarMensaje(nuevoMensaje: string) {
  this.mensaje = nuevoMensaje;
  }
}
