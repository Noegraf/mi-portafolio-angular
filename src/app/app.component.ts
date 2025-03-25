import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LeftSideComponent } from './left-side/left-side.component';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, HeaderComponent, LeftSideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-portafolio-angular';
  
}
