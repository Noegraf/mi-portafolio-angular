import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Panel {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  listItems?: string[];
  backgroundImage: string;  // Fondo sutil (logo o imagen de marca)
  projectImage?: string;    // Imagen del proyecto
  buttonText: string;
  // Puedes agregar propiedades adicionales con detalles para el modal
  details?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'] // Asegurate de que el nombre esté en plural "styleUrls"
})
export class ProjectsComponent {

  activePanelIndex = 0;
  selectedPanelDetail: Panel | null = null;

  panels: Panel[] = [
    {
      id: 'a',
      title: 'Wallet • Hackathon Ethereum Argentina • 2024',
      subtitle: '',
      paragraphs: [],
      backgroundImage: 'assets/1.png', // Fondo sutil
      projectImage: 'assets/tango-preview.png', // Imagen del proyecto
      buttonText: 'Más detalles',
      details: 'Aquí se describen todos los detalles sobre Wallet. Incluye tecnologías, metodología, resultados, etc.'
    },
    {
      id: 'b',
      title: 'App • PXM • 2024',
      paragraphs: [],
      backgroundImage: 'assets/Logo.png',
      projectImage: 'assets/App pxm.png',
      buttonText: 'Más detalles',
      details: 'Detalles sobre la App PXM, proceso de desarrollo, impacto y tecnología utilizada.'
    },
    {
      id: 'c',
      title: 'Desktop Admin panel • Assure • 2024',
      paragraphs: [],
      listItems: [],
      backgroundImage: 'assets/ICONO ZONA SEGURA.png',
      projectImage: 'assets/Desktop Admin panel • Assure (1).png',
      buttonText: 'Más detalles',
      details: 'Este proyecto consistió en el desarrollo de un panel administrativo. Se usaron frameworks modernos y se optimizó la experiencia de usuario.'
    },
    // Agrega más paneles según necesites
  ];

  selectPanel(index: number) {
    this.activePanelIndex = index;
  }

  openDetails(panel: Panel) {
    this.selectedPanelDetail = panel;
  }

  closeDetails() {
    this.selectedPanelDetail = null;
  }
}
