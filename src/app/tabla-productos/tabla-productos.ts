import { Component, inject } from '@angular/core';
import { Producto, ProductosService } from '../servicios/productos';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-tabla-productos',
  imports: [CurrencyPipe],
  templateUrl: './tabla-productos.html',
  styleUrl: './tabla-productos.css'
})
export class TablaProductos {
  loading: boolean = false
  productos: Producto[] = []
  productosService = inject(ProductosService)

  ngOnInit() {
    this.loading = true;
    this.productosService.getProductos().subscribe(
      {
        next: (productos) => {
          this.productos = productos;
        },
        error: (e) => {
          console.error(e)
        },
        complete: () => {
          this.loading = false;
          console.info('complete');
        }
      }
    )
  }
}
