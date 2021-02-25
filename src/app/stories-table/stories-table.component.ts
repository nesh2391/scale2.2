import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { StoriesPopUpData } from "../general-interfaces/StoriesDialogData";

@Component({
  selector: "app-stories-table",
  templateUrl: "./stories-table.component.html",
  styleUrls: ["./stories-table.component.css"],
  animations: [
    trigger("detailExpandStories", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})
export class StoriesTableComponent implements OnInit {
  constructor() {}

  @Input() level: string;
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
