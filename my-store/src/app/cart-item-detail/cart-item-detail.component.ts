import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../../models/Cart';
import { CartService } from '../service/cart.service';



@Component({
  selector: 'app-cart-item-detail',
  standalone: false,
  templateUrl: './cart-item-detail.component.html',
  styleUrl: './cart-item-detail.component.css'
})
export class CartItemDetailComponent {

  @Input() cart: Cart;
  @Output() cartItemQty: EventEmitter<Cart> = new EventEmitter();
  
    constructor(private cartService: CartService){
      this.cart = {
        id: 0,
        productId: 1,
        productName: "Book",
        productPrice: 9.99,
        productUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        qty: 3
      }
    }

    removeProductFromCart(cartItem: Cart) {
      if (cartItem.id !== undefined){
        this.cartService.removeItem(cartItem.id)
        window.alert(`Sucessfully removed ${cartItem.productName} from cart`)
        this.cartItemQty.emit(cartItem)
      }
    }   

}
