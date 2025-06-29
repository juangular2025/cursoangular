import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {
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
