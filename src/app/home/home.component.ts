import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  downloadCV() {
    const cvUrl = 'assets/Noelia Valle - español.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Noelia Valle | UX UI Designer | 2025'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}


