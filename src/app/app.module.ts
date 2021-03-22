import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DemoMaterialModule } from "./material-module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoriesComponent } from "./stories/stories.component";
import { BacklogComponent } from "./backlog/backlog.component";
import { HomeComponent } from "./home/home.component";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";

import { QuillModule } from "ngx-quill";
import { ReleasesComponent } from "./releases/releases.component";
import { AccountComponent } from "./account/account.component";
import { ProcessesComponent } from "./processes/processes.component";

import { FlexLayoutModule } from "@angular/flex-layout";
import { SprintComponent } from "./sprint/sprint.component";
import { GuideModule } from "./guide/guide.module";
import { TasksComponent } from "./stories/tasks/tasks.component";
import { StoriesTableComponent } from "./stories-table/stories-table.component";
import { SprintTableComponent } from "./sprint-table/sprint-table.component";
import { ReleasesTableComponent } from "./releases-table/releases-table.component";
import { DefectComponent } from "./defect/defect.component";
import { SearchSelectComponent } from "./search-select/search-select.component";
import { SprintService } from "./sprint/sprint.service";

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    BacklogComponent,
    HomeComponent,
    ReleasesComponent,
    AccountComponent,
    ProcessesComponent,
    SprintComponent,
    TasksComponent,
    StoriesTableComponent,
    SprintTableComponent,
    ReleasesTableComponent,
    DefectComponent,
    SearchSelectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    GuideModule,
    BrowserAnimationsModule,
    QuillModule.forRoot()
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "fill" }
    },
    { provide: SprintService, useClass: SprintService }
  ],
  bootstrap: [AppComponent],
  entryComponents: [BacklogComponent, StoriesComponent, DefectComponent]
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
