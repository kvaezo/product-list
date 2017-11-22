import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Product } from "../../../models/product";
import { ProductService } from "../../../services/product/product.service";

@Component({
    selector: "app-product-details",
    templateUrl: "./product-details.component.html",
    styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
    @Input() product: Product;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private location: Location
    ) { }

    ngOnInit() {
        this.getProduct();
    }

    getProduct(): void {
        const id = +this.route.snapshot.paramMap.get("id");
        this.productService.getProduct(id).subscribe(product => this.product = product);
    }

    goBack(): void {
        this.location.back();
    }
}
