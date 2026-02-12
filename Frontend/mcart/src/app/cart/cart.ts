import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  constructor(private cartService:CartService){

  }
  ngOnInit(): void {
   this.cartService.getAllCartItems().subscribe((res:any)=>{
    console.log(res)
  })
  }

  getAllCartItems(){
     this.cartService.getAllCartItems().subscribe((res:any)=>{
    console.log(res)
     });
  }
 

 

}
