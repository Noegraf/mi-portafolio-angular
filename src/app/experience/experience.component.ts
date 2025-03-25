import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  position: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  imports: [CommonModule],
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements AfterViewInit {
  // Índice de la tarjeta activa (para la progressbar, etc.)
  activeIndex: number = 0;

  // Experiencias extraídas de tu CV y registros
  experiences: Experience[] = [
    { position: 'Diseñadora UX/UI', company: 'Disruptive Talent', location: 'México', start: 'Dic 2024', end: 'Feb 2025', description: 'Diseño de productos digitales y sistemas escalables.' },
    { position: 'Diseñadora UX/UI', company: 'Consultora Disruptive', location: 'México', start: 'Sep 2024', end: 'Dic 2024', description: 'Optimización de la experiencia digital y arquitectura de sitios.' },
    { position: 'Diseño de Producto', company: 'MicaIA', location: 'Argentina', start: 'May 2024', end: 'Nov 2024', description: 'UX/UI para productos educativos accesibles.' },
    { position: 'Diseñadora UX/UI', company: 'TCM', location: 'México', start: 'Ago 2024', end: 'Sep 2024', description: 'Landing pages optimizadas y experiencia web.' },
    { position: 'Diseñadora UX/UI', company: 'Apolus', location: 'México', start: 'Mar 2024', end: 'Sep 2024', description: 'Sistema de diseño centralizado y análisis de producto.' },
    { position: 'UX/UI Design Officer', company: 'PONTEM', location: 'México', start: 'Mar 2023', end: 'Mar 2024', description: 'Pruebas de usabilidad, rediseño de plataforma móvil y desarrollo de producto.' },
    { position: 'Diseñadora UX/UI', company: 'Biointropic', location: 'Colombia', start: 'Dic 2023', end: 'Ene 2024', description: 'Optimización de formularios adaptativos y recolección de datos científicos.' },
    { position: 'Diseño Web', company: 'Macrotécnica', location: 'Colombia', start: 'Ene 2023', end: 'Mar 2023', description: 'Identidad visual corporativa y diseño web optimizado.' },
    { position: 'Diseñadora UX/UI', company: 'Assure for Life', location: 'EEUU', start: 'Nov 2022', end: 'Dic 2022', description: 'Rediseño de interfaces y mejora de navegación en plataformas móviles y web.' }
  ];

  @ViewChildren('timelineEvent') timelineEvents!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Obtener el índice del elemento observado
        const index = this.timelineEvents.toArray().findIndex(el => el.nativeElement === entry.target);
        if (entry.isIntersecting && index !== -1) {
          entry.target.classList.add('active');
          this.activeIndex = index;
        } else if (index !== -1) {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.6 });

    this.timelineEvents.forEach(event => {
      observer.observe(event.nativeElement);
    });
  }
}
