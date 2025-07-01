import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Producto {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string
}

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  constructor(private http: HttpClient) { }

  url: string = 'https://fakestoreapi.com/products'

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

}