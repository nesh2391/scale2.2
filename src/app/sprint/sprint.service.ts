import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class SprintService {
  subject = new BehaviorSubject({ text: '' });
  constructor() {}

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessages() {
    this.subject.next({ text: '' });
  }

  onMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
