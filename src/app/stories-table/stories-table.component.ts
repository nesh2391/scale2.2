import { Component, OnInit } from "@angular/core";
import { StoriesPopUpData } from "../general-interfaces/StoriesDialogData";

@Component({
  selector: "app-stories-table",
  templateUrl: "./stories-table.component.html",
  styleUrls: ["./stories-table.component.css"]
})
export class StoriesTableComponent implements OnInit {
  constructor() {}

  mockData: StoriesPopUpData[] = [
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
  ];
  ngOnInit() {}
  columnsToDisplay = ["name", "state", "assignedTo"];
}
