import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRenderComponent } from './product-render/product-render.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CartItemDetailComponent } from './cart-item-detail/cart-item-detail.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { FormsModule } from '@angular/forms';
import { CartSubmissionSuccessComponent } from './cart-submission-success/cart-submission-success.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    HeaderComponent,
    ProductDetailComponent,
    ProductRenderComponent,
    CartComponent,
    CartItemDetailComponent,
    SubmitFormComponent,
    CartSubmissionSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
