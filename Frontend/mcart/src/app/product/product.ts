import { Component } from '@angular/core';
import { ProductServise } from '../services/product-servise';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart-service';
import {  ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  constructor(private productservise :ProductServise,private fb: FormBuilder,private cartService: CartService){}

  ngOnInit() {
    this.displayProducts(); // Fetch data as soon as the page loads
  }

  productlist:any;
  filteredProducts: any = [];   // products currently displayed
  categories: string[] = ["All", "Men", "Women", "Electronics", "Kitchen"];
  activeCategory: string = 'All';

  displayProducts(){
    this.productservise.getAllProductsFromServices().subscribe({

      next:(data)=>{this.productlist=data,
                     this.filteredProducts = data;
      },
      error:(err)=>alert(err),
      complete:()=>console.log("fetching data from server is completed")
    })
   
  }

  filterProducts(category: string) {
  this.activeCategory = category;

  // Added safety check: if productlist is empty or null, stop here.
  if (!this.productlist || this.productlist.length === 0) {
    return;
  }

  if (category === 'All') {
    this.filteredProducts = this.productlist;
  } else {
    this.filteredProducts = this.productlist.filter((p: any) => p.category === category);
  } 
  }
 
}
