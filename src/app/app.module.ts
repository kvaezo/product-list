import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ProductsService } from "./api/products/products.service";


import { AppComponent } from "./app.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { AppRoutingModule } from "./app-routing.module";
import { ProductService } from "./services/product/product.service";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
        ProductsService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
