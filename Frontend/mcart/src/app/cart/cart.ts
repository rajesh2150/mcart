import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';
import { ProductModel } from '../models/product.model';
// import {  ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  cartItems:  ProductModel[] = [];

  constructor(private cartService:CartService, private cdr: ChangeDetectorRef){}
  ngOnInit(): void {
    console.warn("Hello World");
    this.loadCartItems();
    
   this.cartService.getAllCartItems().subscribe((res:any)=>{
    console.log(res)
    this.cartItems = res;
    this.cdr.detectChanges(); //
  })
  } 

  getAllCartItems(){
     this.cartService.getAllCartItems().subscribe((res:any)=>{
    console.log(res)
     });
  }
  
   totalAmount: number = 0;

loadCartItems() {
    this.cartService.getAllCartItems().subscribe({
      next: (res: ProductModel[]) => {
        this.cartItems = res;
        this.calculateTotal();
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err)
    });
  }

  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

   increaseQuantity(item: ProductModel) {
    item.quantity++;
    this.calculateTotal();
    // Optional: call backend to update quantity
    // this.cartService.updateCartItem(item).subscribe();
  }

  decreaseQuantity(item: ProductModel) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotal();
      // Optional: call backend to update quantity
      // this.cartService.updateCartItem(item).subscribe();
    }
  }

  removeFromCart(item: ProductModel) {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
    this.calculateTotal();
    // Optional: call backend to remove item
    // this.cartService.removeCartItem(item.id).subscribe();
  }
 
 

}
