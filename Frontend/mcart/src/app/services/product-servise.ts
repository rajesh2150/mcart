import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductServise {

  constructor(private http:HttpClient){

  }
  geturl="/api/product/getAllProducts";

  getAllProductsFromServices():Observable<ProductModel[]> {
  return this.http.get<ProductModel[]>(this.geturl);
 }
  
 addurl="/api/product/saveproduct";
   saveProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.addurl, product);
    // `addurl`
  }
}
