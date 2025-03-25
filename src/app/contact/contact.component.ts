import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [CommonModule],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formspreeUrl = 'https://formspree.io/f/xpwpllwq'; // Reemplaza con tu URL de Formspree
  successMessage: string = ''; // Para mostrar el mensaje de éxito

  handleSubmit(event: Event) {
    event.preventDefault(); // Evita la redirección

    // Obtiene el formulario y envía los datos manualmente
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch(this.formspreeUrl, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        this.successMessage = '¡Gracias! Tu mensaje ha sido enviado con éxito. 📩';
        form.reset(); // Limpia el formulario
        setTimeout(() => this.successMessage = '', 5000); // Oculta el mensaje tras 5s
      } else {
        this.successMessage = 'Ups... Hubo un problema. Inténtalo de nuevo.';
      }
    })
    .catch(() => {
      this.successMessage = 'Error de conexión. Verifica tu internet.';
    });
  }
}
