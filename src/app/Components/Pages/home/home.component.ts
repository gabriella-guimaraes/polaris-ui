import { Component } from '@angular/core';
import { HeroComponent } from '../../Templates/hero/hero.component';
import { ServicesComponent } from '../../Templates/services/services.component';
import { PlansComponent } from '../../Templates/plans/plans.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, PlansComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
