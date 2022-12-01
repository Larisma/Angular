import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/product';

const URL = 'https://63866fbbbeaa6458267c938a.mockapi.io/api/puntohome/puntohome';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    //consumo la api rest
   
    return this.http.get<Product[]>(URL)
    .pipe(tap((products: Product[]) => products.forEach(product => {product.quantity = 0})));
  }
}
