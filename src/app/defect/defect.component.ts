import { Component, Inject, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { DefectsObject } from "../general-interfaces/defects-object";

@Component({
  selector: "app-defect",
  templateUrl: "./defect.component.html",
  styleUrls: ["./defect.component.css"]
})
export class DefectComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DefectsObject>,
    @Inject(MAT_DIALOG_DATA) public defect: DefectsObject
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
