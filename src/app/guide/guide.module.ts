import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoriesexplanationComponent } from "./storiesexplanation/storiesexplanation.component";
import { ProcessexplanationComponent } from "./processexplanation/processexplanation.component";
import { GuideRoutingModule } from "./guide-routing.module";
import { GuideexplanationComponent } from './guideexplanation/guideexplanation.component';

@NgModule({
  imports: [CommonModule, GuideRoutingModule],
  declarations: [StoriesexplanationComponent, ProcessexplanationComponent, GuideexplanationComponent]
})
export class GuideModule {}
