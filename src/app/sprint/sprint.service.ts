import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SprintService {
  subject = new Subject<string>();
  constructor() {}

  getSprintSubject(): Subject<string> {
    return this.subject;
  }

  setSubjectWithInitialLoad() {
    this.subject.next("First");
  }

  putNewSprintInList(varx: string) {
    this.subject.next(varx);
    console.log("got this", varx);
  }
}
