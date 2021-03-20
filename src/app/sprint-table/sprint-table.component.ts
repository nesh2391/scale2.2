import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SprintObjectDef } from "../general-interfaces/sprint-object-def";
import { SprintService } from "../sprint/sprint.service";

@Component({
  selector: "app-sprint-table",
  templateUrl: "./sprint-table.component.html",
  styleUrls: ["./sprint-table.component.css"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})
export class SprintTableComponent implements OnInit {
  subscription: Subscription;
  dataSource: any;
  constructor(private sprintService: SprintService) {
    this.subscription = this.sprintService.onMessage().subscribe(message => {
      this.dataSource = message;
      console.log(message);
    });
  }

  ngOnInit() {}
  @Input() level: string;
  expandedStoriesElement: SprintObjectDef | null;

  displayValues = {
    sprintName: "Sprint Name",
    sprintStart: "Start Date",
    sprintEnd: "End Date"
  };
  columnsToDisplay = ["sprintName", "sprintStart", "sprintEnd"];
  expandedElement: SprintObjectDef | null;
}
