import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { routing } from "./details-routing.module";

@NgModule({
  imports: [
      routing
  ],
  declarations: [
      ProductDetailsComponent
  ]
})
export class DetailsModule { }
