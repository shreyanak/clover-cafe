import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuPopUpComponent } from '../menu-pop-up/menu-pop-up.component';

@Component({
  selector: 'app-card',
  imports: [CommonModule, MenuPopUpComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true
})
export class CardComponent {
  @Input() title = '';
  @Input() date = '';
  showMenu = false;

  openMenuPopUp() {
    this.showMenu = true;
  }

  hideMenu() {
    this.showMenu = false;
  }

  menu1 = 'menu1.png';


}
