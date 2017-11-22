import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
    { path: "", component: ProductListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
