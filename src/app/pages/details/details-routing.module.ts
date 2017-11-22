import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";

const routes: Routes = [
    { path: ":id", component: ProductDetailsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
