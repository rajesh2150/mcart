import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Addproduct } from './addproduct/addproduct';
import { ProductDetailsComponent } from './product-details-component/product-details-component';
import { Mcart } from './mcart/mcart';

const routes: Routes = [
  {
    component:Home,
    path:''
  },{
    component:Cart,
    path:'cart'
  },{
    component:Addproduct,
    path:'addproducts' //addproducts
  },
  {
    component:ProductDetailsComponent,
    path:'product/:id'
  },
  {
    component:Mcart,
    path:'mcart'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
