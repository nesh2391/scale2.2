import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { StoriesComponent } from "../stories/stories.component";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { DefectComponent } from "../defect/defect.component";
import { SprintService } from "../sprint/sprint.service";

@Component({
  selector: "app-backlog",
  templateUrl: "./backlog.component.html",
  styleUrls: ["./backlog.component.css"]
})
export class BacklogComponent implements OnInit {
  name: string;
  topLevelData: any;
  sprintData: string;
  constructor(public dialog: MatDialog, private sprintService: SprintService) {
    // sprintDataService.getSprintSubject().subscribe(data => {
    //   this.topLevelData = data;
    // });
    // sprintDataService.refreshSprintdata();
    // console.log(this.topLevelData);
    this.sprintService.getSprintSubject().subscribe(data => {
      this.sprintData = data;
      console.log("publish ", data);
    });
  }

  openDialog(dataval: StoriesComponent): void {
    const dialogRef = this.dialog.open(StoriesComponent, {
      height: "600px",
      width: "800px",
      data: dataval ? dataval : {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed", result);
      //this.name = result;
    });
  }

  openDefectDialog(dataval: DefectComponent): void {
    const dialogDefectRef = this.dialog.open(DefectComponent, {
      height: "600px",
      width: "800px",
      data: dataval ? dataval : {}
    });

    dialogDefectRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed", result);
      //this.name = result;
    });
  }
  ngOnInit() {}

  newSprintValue(sprint: any) {
    console.log("New sprint value", sprint);
  }

  backlogged = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];

  inProgress = [];

  archived = [
    "Get up",
    "Brush teeth",
    "Take a shower",
    "Check e-mail",
    "Walk dog"
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
