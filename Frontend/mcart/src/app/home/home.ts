import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
 products: ProductModel[] = [];
  filteredProducts: ProductModel[] = [];
  searchText: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Load all products
    this.http.get<ProductModel[]>('/api/product/getAllProducts').subscribe(res => {
      this.products = res;
      this.applyFilter();
    });

    // Listen for query params changes
    this.route.queryParams.subscribe(params => {
      this.searchText = params['search'] || '';
      this.applyFilter();
    });
  }

  applyFilter() {
    if (!this.searchText) {
      this.filteredProducts = this.products;
      return;
    }

    this.filteredProducts = this.products.filter(product =>
      product.productName.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
