import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-left-side',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})


export class LeftSideComponent { 
   // Función para descargar el CV
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
