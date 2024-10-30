import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { AreaCardComponent } from '../../Molecules/area-card/area-card.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ CommonModule, MatCardModule, AreaCardComponent ],
  
templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  cards = [
    { title: 'Web application development', description: 'We create web solutions from scratch or we scale already existing web applications so that the final outcome is functional and bulletproof.' },
    { title: 'Mobile application development', description: 'We build mobile applications both IOS and Android while taking care of the UX/UI aspect of the product.' },
    { title: 'Dedicated IT teams', description: 'We secure your in-house resources by giving you access to professional remote development teams available immediately.' },
    { title: 'UI & UX design', description: 'We craft engaging and user-centered interfaces that enhance user experience and meet business goals, ensuring your digital products are intuitive, visually appealing, and impactful.' },
  ];
  
}
