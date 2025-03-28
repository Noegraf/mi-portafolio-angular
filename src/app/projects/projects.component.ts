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
    {
      id: 'd',
      title: 'Desktop Admin Panel • PXM • 2024',
      paragraphs: [],
      listItems: [],
      backgroundImage: 'assets/Logo.png',
      projectImage: 'assets/Desktop Admin Panel • PXM.png',
      buttonText: 'Más detalles',
      details: 'Este proyecto consistió en el desarrollo de un panel administrativo. Se usaron frameworks modernos y se optimizó la experiencia de usuario.'
    },
    {
      id: 'e',
      title: 'Web • TAU/RAEE • 2024',
      paragraphs: [],
      backgroundImage: 'assets/Logos TAU RAEE-01.png',
      projectImage: 'assets/Web • TAURAEE.png',
      buttonText: 'Más detalles',
      details: 'Desarrollo web para TAU/RAEE, con enfoque en sostenibilidad y reciclaje de electrónicos.'
    },
    {
      id: 'f',
      title: 'Landing • MACROTÉCNICA • 2024',
      paragraphs: [],
      backgroundImage: 'assets/Group 423.png',
      projectImage: 'assets/Landing • MACROTÉCNICA.png',
      buttonText: 'Más detalles',
      details: 'Landing page diseñada para MACROTÉCNICA con enfoque en conversión y experiencia de usuario optimizada.'
    },
    {
      id: 'g',
      title: 'Landing • TCM • 2024',
      paragraphs: [],
      backgroundImage: 'assets/Frame.png',
      projectImage: 'assets/Landing • TCM.png',
      buttonText: 'Más detalles',
      details: 'Página de aterrizaje para TCM, destacando sus soluciones de seguridad vial y productos innovadores.'
    },
    {
      id: 'h',
      title: 'App • MICAIA • 2024',
      paragraphs: [],
      backgroundImage: 'assets/logo MICAIA.png',
      projectImage: 'assets/App • MICAIA.png',
      buttonText: 'Más detalles',
      details: 'Aplicación diseñada para MICAIA con funcionalidades avanzadas y experiencia de usuario optimizada.'
    },
    {
      id: 'i',
      title: 'App • APOLUS • 2024',
      paragraphs: [],
      backgroundImage: 'assets/LogoApolus.png',
      projectImage: 'assets/App • APOLUS.png',
      buttonText: 'Más detalles',
      details: 'Desarrollo y diseño de la aplicación móvil para APOLUS, optimizando flujos y usabilidad.'
    },
    {
      id: 'j',
      title: 'Desktop Admin Panel • APOLUS • 2024',
      paragraphs: [],
      backgroundImage: 'assets/LogoApolus.png',
      projectImage: 'assets/Desktop Admin Panel • APOLUS.png',
      buttonText: 'Más detalles',
      details: 'Panel administrativo para APOLUS con interfaces intuitivas y procesos optimizados.'
    },
    {
      id: 'k',
      title: 'Sistema de Gestión Desktop • BIOINTROPIC • 2024',
      paragraphs: [],
      backgroundImage: 'assets/image 2 1.png',
      projectImage: 'assets/Sistema de gestion Desktop • BIOINTROPIC.png',
      buttonText: 'Más detalles',
      details: 'Sistema de gestión diseñado para BIOINTROPIC, con generación de formularios interactivos.'
    },
    {
      id: 'l',
      title: 'Web • ITCOOLAB • 2024',
      paragraphs: [],
      backgroundImage: 'assets/itcoolab-bg.png',
      projectImage: 'assets/itcoolab-preview.png',
      buttonText: 'Más detalles',
      details: 'Diseño web para ITCOOLAB, centrado en tecnología y educación digital.'
    },
    {
      id: 'm',
      title: 'Propuestas de login • FREELANCE • 2024',
      paragraphs: [],
      backgroundImage: 'assets/login-bg.png',
      projectImage: 'assets/login-proposals.png',
      buttonText: 'Más detalles',
      details: 'Varias propuestas de diseño UX/UI para sistemas de autenticación y login.'
    },
    {
      id: 'n',
      title: 'Juego para Reddit • HACKATHON • 2024',
      paragraphs: [],
      backgroundImage: 'assets/login-bg.png',
      projectImage: 'assets/reddit-game.png',
      buttonText: 'Más detalles',
      details: 'Diseño de experiencia para un juego interactivo en Reddit desarrollado en un hackathon.'
    },
    {
      id: 'o',
      title: 'Desktop Admin Panel • TALENTOCLOUD • 2024',
      paragraphs: [],
      backgroundImage: 'assets/talentocloud-bg.png',
      projectImage: 'assets/talentocloud-preview.png',
      buttonText: 'Más detalles',
      details: 'Panel administrativo diseñado para TALENTOCLOUD, optimizando la gestión de usuarios y procesos internos.'
    }
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
