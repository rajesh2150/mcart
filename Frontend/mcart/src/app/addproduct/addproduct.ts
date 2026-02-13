import { Component, OnInit } from '@angular/core';
import { ProductServise } from '../services/product-servise';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: false,
  templateUrl: './addproduct.html',
  styleUrl: './addproduct.css',
})
export class Addproduct {
  constructor(private productservice:ProductServise, private router: Router){}
  

  newProduct: ProductModel = {
    productName: '',
    description: '',
    price: 0,
    category: 'Electronics',
    quantity: 0
  };
  
 
   saveProduct() {
    this.productservice.saveProduct(this.newProduct).subscribe({
      next: (res) => {
        alert("Product added successfully!");
        // Redirect back to the main product list after saving
        this.router.navigate(['/products']); 
      },
      error: (err) => {
        console.error("Error saving product", err);
        alert("Failed to save product. Check console.");
      }
    });
  }

 

}
