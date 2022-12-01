import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/product';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  
  cartList$: Observable<Product[]>;
  
  
  constructor(private cart: ProductCartService) { 
    this.cartList$ =cart.cartList.asObservable();
  }

  
  ngOnInit(): void {

  }

  maxReached(m: string) {
    alert(m);
  }

}
