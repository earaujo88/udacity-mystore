import { Component, Input, Type, Output, EventEmitter} from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../service/cart.service';
import { Cart } from '../../models/Cart';

@Component({
  selector: 'app-product-render',
  standalone: false,
  templateUrl: './product-render.component.html',
  styleUrl: './product-render.component.css'
})
export class ProductRenderComponent {
  @Input() product: Product;
  @Output() productAdded: EventEmitter<Product> = new EventEmitter();

  cart: Cart [] = []
  qty: number = 0

  constructor(private cartService: CartService){
    this.product = {
      id: 0,
      name: "bla",
      price: 10,
      url: "dsds",
      description: "dsds"
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
    this.productAdded.emit(product)
  }



}
