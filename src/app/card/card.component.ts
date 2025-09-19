import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuPopUpComponent } from '../menu-pop-up/menu-pop-up.component';
import { OrderFormComponent } from "../order-form/order-form.component";
import { DisplayOrderComponent } from "../display-order/display-order.component";

@Component({
  selector: 'app-card',
  imports: [CommonModule, MenuPopUpComponent, OrderFormComponent, DisplayOrderComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true
})
export class CardComponent {
  @Input() title = '';
  @Input() date = '';
  showMenu = false;
  showInvite = false;
  showForm = false;
  orders: { name: string, drink: string, eat: string }[] = [];

  openMenuPopUp() {
    this.showMenu = true;
  }

  hideMenu() {
    this.showMenu = false;
  }

  openInvitePopUp() {
    this.showInvite = true;
  }

  hideInvite() {
    this.showInvite = false;
  }

  openOrderForm() {
    this.showForm = true;
    console.log('showForm value:', this.showForm);
  }


  handleFormSubmit(newEntry: { name: string, drink: string, eat: string }) {
    this.orders = [...this.orders, newEntry];
    this.showForm = false;
    console.log('Current orders:', this.orders);
  }

  // get path from app (parent)
  @Input() menu = '';
  @Input() invite = '';
  @Input() drinks: Array<string> = [];
  @Input() eats: Array<string> = [];

}
