import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css'],
})
export class AboutCardComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() content!: string;
  @Input() active: boolean = false;  

  @Output() cardSelected = new EventEmitter<void>();

  isFlipped: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['active'] && !changes['active'].currentValue) {
      this.isFlipped = false;
    }
  }

  flipCard(event: MouseEvent) {
    event.stopPropagation();
    if (!this.active) {
      this.cardSelected.emit();
      this.isFlipped = true; // Se voltea inmediatamente al activarse
    } else {
      this.isFlipped = !this.isFlipped;
    }
  }
}
