import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//--Components
import { StoriesComponent } from "./stories/stories.component";
import { BacklogComponent } from "./backlog/backlog.component";
import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./account/account.component";
import { ProcessesComponent } from "./processes/processes.component";
import { ReleasesComponent } from "./releases/releases.component";
import { SprintComponent } from "./sprint/sprint.component";
import { GuideexplanationComponent } from "./guide/guideexplanation/guideexplanation.component";
import { StoriesexplanationComponent } from "./guide/storiesexplanation/storiesexplanation.component";
import { ProcessexplanationComponent } from "./guide/processexplanation/processexplanation.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "process", component: ProcessesComponent },
  { path: "backlog", component: BacklogComponent },
  { path: "release", component: ReleasesComponent },
  { path: "sprint", component: SprintComponent },
  { path: "account", component: AccountComponent },
  {
    path: "guide",
    component: GuideexplanationComponent,
    children: [
      { path: "stories", component: StoriesexplanationComponent },
      { path: "processes", component: ProcessexplanationComponent }
    ]
  }
  //{ path: "guide", loadChildren: "./guide/guide.module.ts" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
