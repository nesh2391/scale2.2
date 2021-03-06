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
import { Subscription } from "rxjs";

@Component({
  selector: "app-backlog",
  templateUrl: "./backlog.component.html",
  styleUrls: ["./backlog.component.css"]
})
export class BacklogComponent implements OnInit {
  name: string;
  topLevelData: any;
  sprintData: string;
  subscription: Subscription;
  sprintDataSource: any;
  constructor(public dialog: MatDialog, private sprintService: SprintService) {}
  sendUpdate(val: any) {
    console.log("checking");
    this.sprintService.sendMessage(val);
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

  ngOnDestroy() {}

  newSprintValue(sprint: any) {
    console.log("New sprint value", sprint);
  }

  //backlogged = ["Get to work", "Pick up groceries", "Go home", "Fall asleep"];
  backlogged = [
    {
      name: "Research on Lead Guitar Solo",
      assignedTo: "John, Doe",
      state: 1,
      definitionOfDone: "sounds real good"
    },
    {
      name: "Research on Rithm Guitar Solo",
      assignedTo: "Jane, Doe",
      state: 1,
      definitionOfDone: "sounds real good"
    },
    {
      name: "Research on Base Guitar Solo",
      assignedTo: "Mark, Doe",
      state: 1,
      definitionOfDone: "sounds real good"
    }
  ];

  inProgress = ["Get to work", "Pick up groceries"];

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
