import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";
import { ReleasesObject } from "../general-interfaces/releases-object";

@Component({
  selector: "app-releases-table",
  templateUrl: "./releases-table.component.html",
  styleUrls: ["./releases-table.component.css"],
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
export class ReleasesTableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() level: string;
  sampleDate: number = new Date().getDate();
  mockData: ReleasesObject[] = [
    {
      releaseId: 1,
      releaseName: "riest rlease",
      releaseStartDate: new Date(),
      releaseEndDate: new Date(),
      sprints: [
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
      ]
    }
  ];

  columnsToDisplay = [
    "releaseId",
    "releaseName",
    "releaseStartDate",
    "releaseEndDate"
  ];
}
