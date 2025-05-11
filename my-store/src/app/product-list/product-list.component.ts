import { Component, OnInit, Type } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productList: Product[] = [];

  constructor (private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.productList = data
    })    

  }

  addedProduct(product: Product): void {
    console.log("oi")
    window.alert(`Product ${product.name} added on cart`)
  }

}
