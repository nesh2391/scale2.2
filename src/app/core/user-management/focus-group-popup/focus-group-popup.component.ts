import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FocusGroupDialogData} from '../FocusGroupDialogData';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-focus-group-popup',
  templateUrl: './focus-group-popup.component.html',
  styleUrls: ['./focus-group-popup.component.css']
})
export class FocusGroupPopupComponent implements OnInit {
  public modifyFocusGroup = this.fb.group(
      {focusGroupName: ['', Validators.required], focusGroupDescription: ['', Validators.required]}
  );

  public focusGroupMetadataEditMode = false;
  constructor(public dialogRef: MatDialogRef<FocusGroupPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: FocusGroupDialogData,private fb: FormBuilder) {
    console.log(JSON.stringify(data));
    this.modifyFocusGroup = this.fb.group(
        {focusGroupName: [data.group.name, Validators.required], focusGroupDescription: [data.group.description, Validators.required]}
    );
  }

  ngOnInit(): void {
  }
  updateFocusGroupMetadata() {
    this.data.group.name = this.modifyFocusGroup.value['focusGroupName'];
    this.data.group.description = this.modifyFocusGroup.value['focusGroupDescription'];
    this.focusGroupMetadataEditMode = false;
  }

  searchForUserEntered(){

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
