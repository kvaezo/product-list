import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductListComponent} from "./components/product-list/product-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/list", pathMatch: "full" },
  { path: "list", component: ProductListComponent },
  { path: "details/:id", component: ProductDetailsComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
