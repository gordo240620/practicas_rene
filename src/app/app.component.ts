import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
import { ReplicadorComponent } from "./replicador/replicador.component";
import { NombreDelServicioService } from './nombre-del-servicio.service';
import { ListadoProductosComponent } from "./listado-usuarios/listado-usuarios.component";

@Component({
  selector: 'app-root',
  imports: [
   RouterOutlet,
   PadreComponent,
   MostrarMensajeComponent,
   ReplicadorComponent,
   ListadoProductosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Servicios con Observables en angular';

}