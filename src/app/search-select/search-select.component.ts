import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SprintDataService } from "../sprint/sprint-data.service";

@Component({
  selector: "app-search-select",
  templateUrl: "./search-select.component.html",
  styleUrls: ["./search-select.component.css"]
})
export class SearchSelectComponent implements OnInit {
  constructor(sprintDataService: SprintDataService) {}
  showList: boolean = false;

  @Input() contentToDisplay: string[];
  selectedSprint: string = "Unselected";
  @Output() valueChange = new EventEmitter();

  ngOnInit() {}
  selectSprintItemClick(item: string) {
    this.selectedSprint = item;
    this.valueChange.emit(this.selectedSprint);
    this.showList = !this.showList;
  }
}
