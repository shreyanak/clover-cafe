import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-order',
  standalone: true,
  imports: [NgFor],
  templateUrl: './display-order.component.html',
  styleUrl: './display-order.component.scss'
})
export class DisplayOrderComponent {
  @Input() orderData: { name: string, drink: string, eat: string }[] = [];

  
}
