import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title1 = "End of Summer";
  date1 = "9/19/25";
  title2 = "Fall";
  date2 = "tbd";
}
