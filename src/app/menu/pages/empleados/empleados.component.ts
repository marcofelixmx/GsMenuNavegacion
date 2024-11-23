import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-empleados',
  imports: [],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  public usuarioServices = inject(UsuariosService)

 
}
