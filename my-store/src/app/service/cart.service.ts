import { Injectable } from '@angular/core';
import { Cart } from '../../models/Cart';
import { HttpClient } from '@angular/common/http';
import { elementAt, Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  private cart: Cart [] = [
    
        
  ];

  private cartSubject = new BehaviorSubject<Cart[]>(this.cart);


  private nextIdnumber = 1;

  constructor(private http:HttpClient) { }

  getCart(): Observable<Cart []> {
    //return this.http.get<[]>('./assets/cart.json')
    return this.cartSubject.asObservable();

  }

  addItem(cartItem: Cart) {
    this.cart.push(cartItem);
    this.cartSubject.next(this.cart); 
    console.log(this.cart)
  }

  removeItem(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
    console.log(id)
    this.cartSubject.next(this.cart); 
  }

  cleanCart(): void {
    this.cart = [];
    this.cartSubject.next(this.cart); 
  }

}
