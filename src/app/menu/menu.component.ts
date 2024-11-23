import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from './pages/sidemenu/sidemenu.component';

@Component({
  selector: 'app-menu',
  imports: [RouterModule, SidemenuComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
