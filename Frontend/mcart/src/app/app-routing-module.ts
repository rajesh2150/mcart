import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Addproduct } from './addproduct/addproduct';

const routes: Routes = [
  {
    component:Home,
    path:''
  },{
    component:Cart,
    path:'cart'
  },{
    component:Addproduct,
    path:'addproduct'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
