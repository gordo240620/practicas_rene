import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoProductosComponent {
  usuarios: any[] = [];
  constructor(private usuariosService: UsuariosService) {}
  ngOnInit(): void {
  this.usuariosService.obtenerDatos().subscribe((data) => {
  this.usuarios = data;
  });
  }
}