import { Component, signal, effect } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeRoute = signal('');

  constructor(private router: Router) {
    effect(() => {
      this.activeRoute.set(this.router.url);
    });
  }

  isActive(route: string): boolean {
    return this.activeRoute() === route;
  }
}
