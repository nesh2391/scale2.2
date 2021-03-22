import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { SprintService } from "../sprint/sprint.service";

@Component({
  selector: "app-search-select",
  templateUrl: "./search-select.component.html",
  styleUrls: ["./search-select.component.css"]
})
export class SearchSelectComponent implements OnInit {
  subscription: Subscription;
  dataSource: any;
  constructor(private sprintService: SprintService) {
    this.subscription = this.sprintService.onMessage().subscribe(message => {
      this.dataSource = message;
      console.log("message", message);
    });
  }
  showList: boolean = false;

  @Input() contentToDisplay: string[];
  selectedSprint: any = { sprintName: "Unselected" };
  @Output() valueChange = new EventEmitter();

  ngOnInit() {}
  selectSprintItemClick(item: string) {
    this.selectedSprint = item;
    this.valueChange.emit(this.selectedSprint);
    this.showList = !this.showList;
  }
}
