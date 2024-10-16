import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ MatButtonModule, MatIconModule ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  //scroll
  scroll() {
    const scrollSection = document.getElementById('services');
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: 'smooth' });  // Scroll suave
    }
  }

}

//TODO: Hero Component:
// Criar o Layout do banner
// Imagem de Background fixed
// Main title
// Botão + scroll
