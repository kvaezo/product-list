import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list/product-list.component";
import { routing } from "./list-routing.module";

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        ProductListComponent
    ]
})
export class ListModule { }
