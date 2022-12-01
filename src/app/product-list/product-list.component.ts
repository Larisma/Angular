import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  products: Product [] = [];
 
  constructor(
    private cart: ProductCartService, 
    private productDataService: ProductDataService) { 
  }

  ngOnInit(): void {
    this.productDataService.getAll() .subscribe(products => this.products = products);
  }
  
  addToCart(product: Product): void{
  console.log(product);
    this.cart.addToCart(product);
    product.stock -= product.quantity;
   // product.quantity = 0;
   
  }

  maxReached(m: string) {
    alert(m);
  }


}
