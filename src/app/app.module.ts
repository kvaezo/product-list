import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ProductsService } from "./api/products/products.service";


import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ProductService } from "./services/product/product.service";


@NgModule({
  declarations: [
    AppComponent
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
  bootstrap: [ AppComponent ]
})
export class AppModule { }
