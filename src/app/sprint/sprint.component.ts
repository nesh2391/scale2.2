import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { SprintObjectDef } from "../general-interfaces/sprint-object-def";
import { SprintObject } from "./sprint-object";
import { SprintService } from "./sprint.service";

@Component({
  selector: "app-sprint",
  templateUrl: "./sprint.component.html",
  styleUrls: ["./sprint.component.css"]
})
export class SprintComponent implements OnInit {
  sprintData: string;
  newSprintForm = new FormGroup({
    sprintName: new FormControl("", Validators.required),
    sprintStart: new FormControl("", Validators.required),
    sprintEnd: new FormControl("", Validators.required)
  });
  panelOpenState = false;
  subscription: Subscription;

  constructor(private sprintService: SprintService) {
    this.subscription = this.sprintService.onMessage().subscribe(message => {
      //this.sprintData = message.text;
      console.log(message);
    });
  }
  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  createSprint() {
    let sprintObjectDef: SprintObject = this.newSprintForm.value;

    console.log(sprintObjectDef);
    this.sprintService.sendMessage(sprintObjectDef);
    console.log("gingy bear", this.panelOpenState);
    this.resetForm();
  }

  resetForm() {
    this.newSprintForm.reset();
  }
  toggleAccordina() {
    this.panelOpenState = !this.panelOpenState;
  }

  get sprintName() {
    return this.newSprintForm.get("sprintName");
  }
  get sprintStart() {
    return this.newSprintForm.get("sprintStart");
  }
  get sprintEnd() {
    return this.newSprintForm.get("sprintEnd");
  }
}
