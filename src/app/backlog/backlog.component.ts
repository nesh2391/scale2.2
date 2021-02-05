import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { StoriesComponent } from "../stories/stories.component";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-backlog",
  templateUrl: "./backlog.component.html",
  styleUrls: ["./backlog.component.css"]
})
export class BacklogComponent implements OnInit {
  name: string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(StoriesComponent, {
      height: "600px",
      width: "800px",
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed", result);
      this.name = result;
    });
  }
  ngOnInit() {}

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
