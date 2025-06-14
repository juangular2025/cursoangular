import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  contador = 0;

  incrementar() {
    if (this.contador + 1 > 10) {
      alert('El contador no puede ser mayor a 10');
      return;
    }
    this.contador = this.contador + 1;
  }

  decrementar() {
    if (this.contador - 1 < 0) {
      alert('El contador no puede ser menor a 0');
      return;
    }
    this.contador = this.contador - 1;
  }
}

