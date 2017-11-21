import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product/product.service";

@Component({
    selector: "app-product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
    products: Product[];

    constructor(
        private productService: ProductService
    ) { }

    ngOnInit() {
        this.getProducts();
    }

    getProducts(): void {
        this.productService.getProducts().subscribe(products => this.products = products);
    }
}
