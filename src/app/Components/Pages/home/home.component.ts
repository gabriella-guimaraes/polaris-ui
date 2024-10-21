import { Component } from '@angular/core';
import { HeroComponent } from '../../Templates/hero/hero.component';
import { ServicesComponent } from '../../Templates/services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
