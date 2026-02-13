import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  ProductModel } from '../../models/product.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductServise {

  constructor(private http:HttpClient){

  }
  geturl="/api/product/getAllProducts";

  getAllProductsFromServices(){
  return this.http.get(this.geturl);
 }
  
 addurl="/api/product/addProduct";
   saveProduct(product:  ProductModel): Observable< ProductModel> {
    return this.http.post< ProductModel>(this.addurl, product);
    // `addurl`
  }

  getidurl="/api/product/getProductById";

  getProductById(id :number){
return this.http.get(`${this.getidurl}/${id}`);  }
}
