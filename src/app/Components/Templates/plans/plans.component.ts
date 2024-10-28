import { Component } from '@angular/core';
import { CarouselComponent } from '../../Organisms/carousel/carousel.component';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [ CarouselComponent ],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {

}
