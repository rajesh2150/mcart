import { Component } from '@angular/core';
import { ProductServise } from '../services/product-servise';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart-service';
// import {  ProductModel } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../models/product.model';


@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  constructor(private productservise :ProductServise,private fb: FormBuilder,private http: HttpClient, private route: ActivatedRoute){}

  products: ProductModel[] = [];
  SearchFilteredProducts: ProductModel[] = [];
  searchText: string = '';


   
  categories: string[] = ["All", "Men", "Women", "Electronics", "Kitchen"];
  activeCategory: string = 'All';

 
 

  ngOnInit() {

    this.productservise.getAllProductsFromServices().subscribe((data)=>{
      this.products=data;
      this.SearchFilteredProducts=data;
    })

    // Listen for query params changes
    this.route.queryParams.subscribe(params => {
      this.searchText = params['search'] || '';
      this.applyFilter();
    });
    this.displayProducts(); // Fetch data as soon as the page loads
  }

   applyFilter() {
    if (!this.searchText) {
      this.SearchFilteredProducts = this.products;
      return;
    }

    this.SearchFilteredProducts = this.products.filter(product =>
      product.productName.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  productlist:any;


  displayProducts(){
    this.productservise.getAllProductsFromServices().subscribe({

      next:(data)=>{this.productlist=data
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
    this.SearchFilteredProducts = this.productlist;
  } else {
    this.SearchFilteredProducts = this.productlist.filter((p: any) => p.category === category);
  }
 
}
}
