import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-public',
  templateUrl: './nav-public.component.html',
  styleUrls: ['./nav-public.component.css']
})
export class NavPublicComponent {
  vinBuscado: string = '';

  onInputChange(value: string): void {
    // Esta función se ejecutará cada vez que el usuario escriba en el input.
    this.vinBuscado = value; // Actualiza la propiedad vinBuscado con el valor del input.
  }

  consulta(vin: string): void {
    // Esta función se ejecutará cuando se haga clic en el botón.
    console.log('VIN Buscado:', vin); // Muestra el valor en la consola del navegador.
    // Aquí puedes realizar otras acciones, como realizar una solicitud a una API.
  }
}


