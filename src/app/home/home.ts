import { Component } from '@angular/core';
import { TablaProductos } from "../tabla-productos/tabla-productos";

@Component({
  selector: 'app-home',
  imports: [TablaProductos],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
}
