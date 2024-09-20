import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private host:string = 'http://localhost:8889/products';

  searchProducts(keyword:string='' ,page:number=1,size:number=4) {
    return this.http.get(`${this.host}?name_like=${keyword}&_page=${page}&_limit=${size}`, {observe: 'response'});
  }

  updateProduct(product: Product):Observable<any> {
    return this.http.patch<Product>(`${this.host}/` + product.id, {
      checked: !product.checked
    });
  }

  deleteProduct(product: Product):Observable<any> {
    return this.http.delete(`${this.host}/`  + product.id);
  }

  addProduct(product: Product):Observable<any> {
    return this.http.post(`${this.host}` , product);
  }
  editProduct(productId:number, product:Product):Observable<any>{
    return this.http.patch<Product>(`${this.host}/${productId}`, product);
  }
  getProductById(id:number):Observable<any> {
    return this.http.get<Product>(`${this.host}/${id}`)
  }

}
