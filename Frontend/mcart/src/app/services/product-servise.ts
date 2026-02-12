import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
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
  
 addurl="/api/product/saveproduct";
   saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.addurl, product);
    // `addurl`
  }
}
