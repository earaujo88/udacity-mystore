import { Component,OnInit } from '@angular/core';
import { Cart } from '../../models/Cart';
import { CartService } from '../service/cart.service';



@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart: Cart [] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService){}

  ngOnInit() : void {

     this.cartService.getCart().subscribe(data => {
      this.cart = data
     })

     if(this.cart !== undefined){
      this.cart.forEach((cartItem) =>{
        this.totalAmount =  this.totalAmount + (cartItem.qty as number * cartItem.productPrice! as number)
       })
     }



  }

  qtyChanged(cartItem: Cart): void{
    this.totalAmount = this.totalAmount - (cartItem.qty! * cartItem.productPrice!)
  }
}
