import { Component } from '@angular/core';
import { PadreComponent } from '../padre.component';

@Component({
  selector: 'app-hijo',
  imports: [PadreComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  private titulo = 'Titulo Componente Hijo';
  // Se usa en la plantilla como si fuera una propiedad mas
  get mostrarTitulo(){
  return this.titulo;
  }
  // Se usa en la plantilla como un método (uso de paréntesis)
  getTitulo(){
  return this.titulo;
  }
  
}
