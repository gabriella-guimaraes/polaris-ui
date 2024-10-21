import { Component } from '@angular/core';
import { ServicesCardComponent } from '../../Molecules/services-card/services-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ ServicesCardComponent ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
