import { Component, Input, Type, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { Router, Navigation } from '@angular/router';
import { strict } from 'assert';
import { Cart } from '../../models/Cart';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Output() productAdded: EventEmitter<Product> = new EventEmitter();

  product: Product = {};
  cart: Cart [] = [];
  qty: number = 0;

  constructor(private router: Router, private cartService: CartService){
    const nav = this.router.getCurrentNavigation();
    const productValue = nav?.extras.state as any;
    
   if (productValue !== undefined){
    this.product = {
      id: productValue.product.id as number,
      name: productValue.product.name as string,
      price: productValue.product.price as number,
      url: productValue.product.url as string,
      description: productValue.product.description as string
    }
   }

   
    
    
  }

  addProductToCart(product: Product): void{
    this.cartService.getCart().subscribe(data => {
      this.cart = data
    })
    const cartItem: Cart = {
      id: this.cart.length + 1,
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      productUrl: product.url,
      qty: this.qty
    }
    this.cartService.addItem(cartItem)
    window.alert(`Product ${product.name} added on cart`)
    
  }

  

}
