import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
import { ReplicadorComponent } from "./replicador/replicador.component";
import { NombreDelServicioService } from './nombre-del-servicio.service';

@Component({
  selector: 'app-root',
  imports: [
   RouterOutlet,
   PadreComponent,
   MostrarMensajeComponent,
   ReplicadorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Servicios en Angular';
mensaje: string;
 constructor(private mensajeService: NombreDelServicioService) {
 this.mensaje = this.mensajeService.obtenerMensaje();
 }
}