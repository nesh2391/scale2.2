import { Component, OnInit } from "@angular/core";
import { ReleasesObject } from "../general-interfaces/releases-object";

@Component({
  selector: "app-releases",
  templateUrl: "./releases.component.html",
  styleUrls: ["./releases.component.css"]
})
export class ReleasesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
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
