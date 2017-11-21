import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../../models/product";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {

    private productsUrl = "api/products";

    constructor(
        private http: HttpClient
    ) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl);
    }

}
