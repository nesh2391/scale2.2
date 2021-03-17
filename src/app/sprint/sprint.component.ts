import { Component, OnInit } from "@angular/core";
import { SprintService } from "./sprint.service";

@Component({
  selector: "app-sprint",
  templateUrl: "./sprint.component.html",
  styleUrls: ["./sprint.component.css"]
})
export class SprintComponent implements OnInit {
  constructor(sprintService: SprintService) {}
  sprintName: string = "";
  ngOnInit() {}

  addSprint() {
    this.sprintService.putNewSprintInList(this.sprintName);
  }
}
