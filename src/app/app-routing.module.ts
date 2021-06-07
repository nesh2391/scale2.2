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
import { TokenResolverService } from "./resolver/token-resolver.service";
import { SelectEnvironmentComponent } from "./select-environment/select-environment.component";
import { NavigationGuardService } from "./system-guards/navigation-guard.service";
import { UmHomeComponent } from "./user-management/um-home/um-home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "process", component: ProcessesComponent, canActivate: [NavigationGuardService] },
  { path: "backlog", component: BacklogComponent },
  { path: "release", component: ReleasesComponent },
  { path: "sprint", component: SprintComponent },
  { path: "account", component: AccountComponent },
  { path: "server-select", component: SelectEnvironmentComponent, canActivate: [NavigationGuardService]  },
  {
    path: "guide",
    component: GuideexplanationComponent,
    children: [
      { path: "stories", component: StoriesexplanationComponent },
      { path: "processes", component: ProcessexplanationComponent }
    ]
  },
  {
    path: "user-management",
    component:  UmHomeComponent,
    canActivate: [NavigationGuardService]
    // children: [
    //   { path: "stories", component: StoriesexplanationComponent },
    //   { path: "processes", component: ProcessexplanationComponent }
    // ]
  },
  {
    path: 'callback',
    component: SelectEnvironmentComponent,
    resolve: {
      access: TokenResolverService
    }
    
  }
  //{ path: "guide", loadChildren: "./guide/guide.module.ts" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
