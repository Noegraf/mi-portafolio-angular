import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCardComponent } from '../components/about-card/about-card.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [CommonModule, AboutCardComponent],
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // activeIndex = -1 indica que no hay carta activa (posición inicial)
  activeIndex: number = -1;

  cards = [
    { title: 'Presentación', icon: 'assets/Iconos/Presentacion.svg', content: 'Mi enfoque integra investigación y creatividad para convertir ideas en soluciones funcionales y visualmente atractivas. Confío en la iteración constante y el aprendizaje continuo como pilares para enfrentar desafíos de diseño. A lo largo de mi carrera, he trabajado junto a equipos multidisciplinarios, especializándome en comprender las necesidades de los usuarios y transformarlas en oportunidades de innovación. Soy proactiva, comprometida y siempre busco nuevas formas de optimizar y elevar la experiencia digital.' },
    { title: 'Formación Académica', icon: 'assets/Iconos/Formación-academica.svg', content: 'Diplomatura UX/UI – Centro de e-Learning SCEU UTN-BA (2024 – Actualidad)<br>Desarrollador Full Stack Junior – ISPC (2022 – 2023)<br>Diseño UX/UI – Agencia de Aprendizaje, Codo a Codo (2022)<br>Licenciatura en Bellas Artes – UNR (2011 – 2016)<br>Diseño Integral – CEPEC (2006 – 2009)' },
    { title: 'Cursos certificados', icon: 'assets/Iconos/Cursos-certificados.svg', content: 'Diseño de UX para Videojuegos – Udemy (2025)<br>Game Design – Udemy (2025)<br>UI - Design System – Coderhouse (2024)<br>Product Manager – Coderhouse (2023)<br>Full Stack – Argentina Programa (2021)' },
    { title: 'Habilidades blandas', icon: 'assets/Iconos/Habilidades-blandas.svg', content: 'Comunicación efectiva<br>Colaboración interdisciplinaria<br>Pensamiento analítico<br>Resolución de problemas<br>Adaptabilidad y aprendizaje continuo<br>Automotivación<br>Creatividad e innovación<br>Gestión del tiempo<br>Trabajo en equipo' },
    { title: 'Habilidades Técnicas', icon: 'assets/Iconos/Habilidades-tecnicas.svg', content: 'UX/UI Design<br>Wireframing<br>Prototipado<br>Diseño de interacción<br>Diseño responsivo<br>Accesibilidad<br>Investigación de usuarios<br>Arquitectura de la información<br>Evaluación de la usabilidad del producto<br>Usabilidad y accesibilidad<br>Creación de sistemas escalables<br>Desarrollo de casos de uso<br>Metodologías ágiles (Scrum, Kanban)<br>Design Thinking<br>UX Research' },
  ];

  // Si se hace click en una carta, se activa esa carta (si no lo estaba)
  setActive(index: number) {
    // Si la carta clickeada ya es la activa, no hacemos nada (así el hijo se encargará de flippear)
    if (this.activeIndex !== index) {
      this.activeIndex = index;
    }
  }

  // Si se hace click fuera (en el contenedor), se desactiva la carta activa
  deactivate() {
    this.activeIndex = -1;
  }

  // Calcula el transform de cada carta según su posición y la carta activa
  computeTransform(index: number): string {
    if (this.activeIndex === -1) {
      // Posición inicial: las cartas se solapan ligeramente
      const offset = index * 30; // ajusta para más o menos solapamiento
      return `translateX(${offset}px) scale(0.95)`;
    } else {
      // Con carta activa:
      // La carta activa se centra (translateX(0) y escala 1)
      // Las demás se desplazan a la izquierda o derecha
      const diff = index - this.activeIndex;
      const translateX = diff * 150; // ajusta separación entre cartas activas
      const scale = diff === 0 ? 1 : 0.9;
      return `translateX(${translateX}px) scale(${scale})`;
    }
  }

  // Calcula el z-index para que la carta activa se muestre al frente
  computeZIndex(index: number): number {
    if (this.activeIndex === -1) {
      return index;
    } else if (this.activeIndex === index) {
      return 10;
    } else {
      return 5 - Math.abs(index - this.activeIndex);
    }
  }
}
