import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServise } from '../services/product-servise';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-product-details-component',
  standalone: false,
  templateUrl: './product-details-component.html',
  styleUrl: './product-details-component.css',
})
export class ProductDetailsComponent {

  product: any;
  quantity: number = 1;
  
  constructor(private route: ActivatedRoute,
    private productService: ProductServise,
    private cartService : CartService,
  private cdr: ChangeDetectorRef){}

  ngOnInit() {
  const productId =Number(this.route.snapshot.paramMap.get('id'));
  console.log("Product ID:", productId);
  this.productService.getProductById(productId).subscribe(data=>{
    this.product = data;
    console.log(data);
   
      this.cdr.detectChanges(); //
  });

}

 increaseQuantity(){
    this.quantity++;
 }

 decreaseQuantity(){
   if (this.quantity > 1) {
      this.quantity--;
   }
 }

addToCart(){
  const productWithQty = {
      ...this.product,
      quantity: this.quantity
    };

  this.cartService.addToCart(productWithQty).subscribe({
    next: (res) => {
      alert("Product added to cart!");
    },
    error: (err) => {
      console.error("Error adding to cart", err);
    }
  });
}
}
