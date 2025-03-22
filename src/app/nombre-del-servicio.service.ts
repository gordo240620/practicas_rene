import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NombreDelServicioService {
  private mensaje: string = 'Hola desde el servicio de Mensajes!';
  obtenerMensaje(): string {
  return this.mensaje;
  }
}
