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


  constructor(private router: Router, private cartService: CartService){}

  ngOnInit(): void {
    
  }

  onSubmit(): void{
    this.router.navigate(['/success'])
    this.cartService.cleanCart()
  }

}
