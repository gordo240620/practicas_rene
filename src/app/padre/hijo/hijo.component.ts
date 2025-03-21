import { Component, Input} from '@angular/core';
import { PadreComponent } from '../padre.component';


@Component({
  selector: 'app-hijo',
  imports: [PadreComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
   // !:operador non-null assertion operator en TypeScript.
  // confíe en que esta propiedad será inicializada
  // Se inicializa desde el componente Padre
  @Input() mensaje!: string;

  
}
