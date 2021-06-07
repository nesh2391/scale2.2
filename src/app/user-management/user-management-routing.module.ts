import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UmHomeComponent } from "./um-home/um-home.component";


const aboutRoutes: Routes = [
  { path: "", component: UmHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {}