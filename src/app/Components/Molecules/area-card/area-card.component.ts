import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-area-card',
  standalone: true,
  imports: [ MatIconModule, MatButtonModule ],
  templateUrl: './area-card.component.html',
  styleUrl: './area-card.component.css'
})
export class AreaCardComponent {

  @Input() title: string = '';
  @Input() description: string = '';

}
