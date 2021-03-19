import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SprintObjectDef } from "../general-interfaces/sprint-object-def";
import { SprintService } from "./sprint.service";

@Component({
  selector: "app-sprint",
  templateUrl: "./sprint.component.html",
  styleUrls: ["./sprint.component.css"]
})
export class SprintComponent implements OnInit {
  sprintData: string;
  subscription: Subscription;
  startDate: Date;
  endDate: Date;
  sprintObjectDef: SprintObjectDef;
  constructor(private sprintService: SprintService) {
    this.subscription = this.sprintService.onMessage().subscribe(message => {
      this.sprintData = message.text;
      console.log(message);
    });
  }
  sprintName: string = "";
  ngOnInit() {}

  addSprint(val: any) {
    this.sprintService.sendMessage(val);
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  createSprint() {
    //this.sprintObjectDef=new SprintObjectDef();
  }
}
