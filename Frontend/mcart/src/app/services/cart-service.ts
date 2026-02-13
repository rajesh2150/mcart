import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  
  
  constructor(private http:HttpClient){


  }
  private url = '/app/cart/getAll';
   cart:any;

  // getAllCartItems(){
  //    return this.http.get(this.url);
  // }
  getAllCartItems(): Observable<ProductModel[]> {
  return this.http.get<ProductModel[]>(this.url); 
}


// apiUrl='/api/cart';
 apiUrl = '/app/cart';

 addToCart(product: any): Observable<any> {
  const productId = product.id;
  const  quantity = product.quantity;

return this.http.post(`${this.apiUrl}/additem/${productId}?quantity=${quantity}`, {});}

}