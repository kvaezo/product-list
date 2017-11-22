import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/list", pathMatch: "full" },
  { path: "list", loadChildren: "app/pages/list/list.module#ListModule" },
  { path: "details", loadChildren: "app/pages/details/details.module#DetailsModule" }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
