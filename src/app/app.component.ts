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
  menu1 = 'menu1.png';
  menu2 = 'menu2.png'
  invite1 = 'invite1.png'
  drinks1 = ['Lavender Matcha', 'Vanilla Cold Foam Matcha', 'Espresso Mocktini'];
  eats1 = ['Banana Mini Muffins', 'Blueberry Muffins', 'Blackberry Muffins'];
}
