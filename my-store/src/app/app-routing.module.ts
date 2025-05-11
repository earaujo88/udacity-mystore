import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CartSubmissionSuccessComponent } from './cart-submission-success/cart-submission-success.component';




const routes: Routes = [
  {path : '', component: ProductListComponent},
  {path : 'product-detail', component: ProductDetailComponent},
  {path : 'cart', component: CartComponent},
  {path : 'success', component: CartSubmissionSuccessComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
