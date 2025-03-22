import { Component, Output, EventEmitter} from '@angular/core';
import { PadreComponent } from '../padre.component';


@Component({
  selector: 'app-hijo',
  imports: [PadreComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Output() notificarPadre = new EventEmitter<string>();

   enviarMensaje() {
   // Emitir el evento con un mensaje (se emite un str)
   this.notificarPadre.emit('Mensaje desde el Componente Hijo al Padre');
  }
}
