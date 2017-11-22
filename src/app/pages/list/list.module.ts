import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { routing } from "./list-routing.module";
import { ProductSearchComponent } from "./product-search/product-search.component";

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        ProductListComponent,
        ProductSearchComponent
    ]
})
export class ListModule { }
