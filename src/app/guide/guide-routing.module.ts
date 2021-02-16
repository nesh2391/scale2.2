import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StoriesexplanationComponent } from "./storiesexplanation/storiesexplanation.component.ts";
import { ProcessexplanationComponent } from "./processexplanation/processexplanation.component.ts";
import { GuideexplanationComponent } from "./guideexplanation/guideexplanation.component.ts";

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
