import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';

import { ComponenteInlineComponent } from './componente-inline/componente-inline.component';

import { PadreComponent } from './padre/padre.component';

@Component({
  selector: 'app-root',
  imports: [
   NuevoComponenteComponent,
   ComponenteInlineComponent,
   PadreComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicas';
}
