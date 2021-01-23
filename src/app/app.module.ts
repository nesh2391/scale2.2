import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DemoMaterialModule } from "./material-module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoriesComponent } from "./stories/stories.component";
import { BacklogComponent } from "./backlog/backlog.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    BacklogComponent,
    HomeComponent
  ],
  imports: [BrowserModule, DemoMaterialModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
