import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DemoMaterialModule } from "./material-module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoriesComponent } from "./stories/stories.component";
import { BacklogComponent } from "./backlog/backlog.component";
import { HomeComponent } from "./home/home.component";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";

import { QuillModule } from "ngx-quill";
import { ReleasesComponent } from './releases/releases.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    BacklogComponent,
    HomeComponent,
    ReleasesComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    QuillModule.forRoot()
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" }
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [BacklogComponent, StoriesComponent]
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
