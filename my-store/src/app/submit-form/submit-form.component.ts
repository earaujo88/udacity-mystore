import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { Cart } from '../../models/Cart';



@Component({
  selector: 'app-submit-form',
  standalone: false,
  templateUrl: './submit-form.component.html',
  styleUrl: './submit-form.component.css'
})
export class SubmitFormComponent implements OnInit{

  fullName: string = '';
  address: string = '';
  creditCardNumber: number = 0;
  nameWarning: boolean = false;
  adressWarning: boolean = false;
  creditCardWarning: boolean = false;


  constructor(private router: Router, private cartService: CartService){}

  ngOnInit(): void {
    
  }

  nameChanged(event: any): void{
    if (event.length < 3){
      this.nameWarning = true
    } else {
      this.nameWarning = false
    }

  }

  addressChanged(event: any): void{
    if (event.length < 6){
      this.adressWarning = true
    } else {
      this.adressWarning = false
    }

  }

  creditCardChanged(event: any): void{
    if (event.length < 16){
      this.creditCardWarning = true
    } else {
      this.creditCardWarning = false
    }

  }

  onSubmit(): void{
    this.router.navigate(['/success'])
    this.cartService.cleanCart()
  }

}
