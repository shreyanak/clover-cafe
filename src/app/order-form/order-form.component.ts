import { NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent {
  name = '';
  selectedDrink = '';
  selectedEat = '';

  @Input() drinks: Array<string> = [];
  @Input() eats: Array<string> = [];
  @Output() close = new EventEmitter<{name: string, drink: string, eat: string}>();

  onSubmit() {
    this.close.emit({name: this.name, drink: this.selectedDrink, eat: this.selectedEat});
  }
}
