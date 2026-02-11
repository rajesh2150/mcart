import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Cart } from './cart/cart';

const routes: Routes = [
  {
    component:Home,
    path:''
  },{
    component:Cart,
    path:'cart'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
