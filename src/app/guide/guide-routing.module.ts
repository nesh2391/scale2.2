import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StoriesexplanationComponent } from "./storiesexplanation/storiesexplanation.component";
import { ProcessexplanationComponent } from "./processexplanation/processexplanation.component";
import { GuideexplanationComponent } from "./guideexplanation/guideexplanation.component";

const aboutRoutes: Routes = [
  { path: "stories", component: StoriesexplanationComponent },
  { path: "processes", component: ProcessexplanationComponent },
  { path: "", component: GuideexplanationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule]
})
export class GuideRoutingModule {}
