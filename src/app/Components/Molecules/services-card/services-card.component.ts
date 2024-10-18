import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.css'
})
export class ServicesCardComponent {
  //TODO: Adicionar um input para receber um icon também
  @Input() title: string = '';
  @Input() description: string = '';
}
