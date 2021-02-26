import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { SprintObjectDef } from "../general-interfaces/sprint-object-def";

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
  constructor() {}

  ngOnInit() {}

  expandedStoriesElement: SprintObjectDef | null;
  sampleDate: number = new Date().getDate();
  mockContent: SprintObjectDef[] = [
    {
      sprintId: 1,
      sprintName: "sample Test 1",
      sprintStart: this.sampleDate,
      sprintEnd: this.sampleDate,
      stories: [
        {
          name: "story-test-1",
          componentName: "feature-x",
          state: 1,
          sprintId: 1,
          assignedTo: "john doe",
          ticketChecked: false,
          ticketDetails: null,
          title: null,
          nonDevelopmentStory: null,
          featureName: null
        },
        {
          name: "story-test-1",
          componentName: "feature-x",
          state: 1,
          sprintId: 1,
          assignedTo: "john doe",
          ticketChecked: false,
          ticketDetails: null,
          title: null,
          nonDevelopmentStory: null,
          featureName: null
        },
        {
          name: "story-test-1",
          componentName: "feature-x",
          state: 1,
          sprintId: 1,
          assignedTo: "john doe",
          ticketChecked: false,
          ticketDetails: null,
          title: null,
          nonDevelopmentStory: null,
          featureName: null
        }
      ]
    },
    {
      sprintId: 1,
      sprintName: "sample Test 1",
      sprintStart: this.sampleDate,
      sprintEnd: this.sampleDate,
      stories: [
        {
          name: "story-test-1",
          componentName: "feature-x",
          state: 1,
          sprintId: 1,
          assignedTo: "john doe",
          ticketChecked: false,
          ticketDetails: null,
          title: null,
          nonDevelopmentStory: null,
          featureName: null
        }
      ]
    }
  ];
  dataSource = this.mockContent;
  displayValues = {
    sprintName: "Sprint Name",
    sprintStart: "Start Date",
    sprintEnd: "End Date"
  };
  columnsToDisplay = ["sprintName", "sprintStart", "sprintEnd"];
  expandedElement: SprintObjectDef | null;
}
