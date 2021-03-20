import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { SprintObjectDef } from "../general-interfaces/sprint-object-def";
import { SprintObject } from "./sprint-object";

@Injectable()
export class SprintService {
  subject = new BehaviorSubject(undefined);
  constructor() {}

  sampleDate: Date = new Date();
  mockContent: SprintObject[] = [
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

  loadMockData() {
    this.subject.next(this.mockContent);
  }
  sendMessage(message: SprintObject) {
    sj: SprintObject;
    this.mockContent.push(message);
    this.subject.next(this.mockContent);
  }

  clearMessages() {
    this.subject.next(undefined);
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
