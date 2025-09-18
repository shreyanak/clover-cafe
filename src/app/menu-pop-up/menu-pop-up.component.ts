import { Component, Input, Output, EventEmitter, HostListener} from '@angular/core';


@Component({
  selector: 'app-menu-pop-up',
  imports: [],
  templateUrl: './menu-pop-up.component.html',
  styleUrl: './menu-pop-up.component.scss',
  standalone: true
})
export class MenuPopUpComponent {
  @Input() menu = '';
  @Output() close = new EventEmitter<MouseEvent>();


  onOverlayClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('overlay')) {
      this.close.emit();
      event.stopPropagation(); 
    }
  }
}
