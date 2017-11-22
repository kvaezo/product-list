import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../../models/product";
import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";

@Injectable()
export class ProductService {

    private productsUrl = "api/products";

    constructor(
        private http: HttpClient
    ) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl);
    }

    getProduct(id: number): Observable<Product> {
        const url = `${this.productsUrl}/${id}`;
        return this.http.get<Product>(url).pipe(
            catchError(this.handleError<Product>(`getProduct id=${id}`))
        );
    }

    searchProducts(term: string): Observable<Product[]> {
        if (!term.trim()) {
            return of([]);
        }

        return this.http.get<Product[]>(`${this.productsUrl}/?name=${term}`).pipe(
            catchError(this.handleError<Product[]>("searchProducts", []))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = "operation", result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
