import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  constructor(private http:HttpClient){


  }
  private url = '/api/product/getAllProducts';
   cart:any;


  getAllCartItems(){
     return this.http.get(this.url);
  }
}
