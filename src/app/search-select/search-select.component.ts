import { Component, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-search-select",
  templateUrl: "./search-select.component.html",
  styleUrls: ["./search-select.component.css"]
})
export class SearchSelectComponent implements OnInit {
  constructor() {}
  showList: boolean = false;

  @Input() contentToDisplay: any[];
  @Output() selectedSprint: string = "Unselected";

  ngOnInit() {}
}
