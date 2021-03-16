import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { SprintObjectDef } from "../general-interfaces/sprint-object-def";

@Injectable()
export class SprintDataService {
  constructor() {}
  // sprintDataObservable: Observable<SprintObjectDef[]>;

  sampleDate: number = new Date().getDate();
  sprintObjects: SprintObjectDef[] = [
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
  subjectSprintData = new Subject<SprintObjectDef[]>();
  getSprintSubject(): Subject<SprintObjectDef[]> {
    return this.subjectSprintData;
  }
  refreshSprintdata() {
    this.subjectSprintData.next(this.sprintObjects);
  }
}
