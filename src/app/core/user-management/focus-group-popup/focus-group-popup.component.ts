import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FocusGroupDialogData} from '../FocusGroupDialogData';
import {FormBuilder, Validators} from '@angular/forms';
import {ProfileService} from '../../../auth/logged-in/profile.service';
import {UserAndEnvironmentService} from '../../api/user-and-environment.service';

@Component({
  selector: 'app-focus-group-popup',
  templateUrl: './focus-group-popup.component.html',
  styleUrls: ['./focus-group-popup.component.css']
})
export class FocusGroupPopupComponent implements OnInit {

  public focusGroupSearchFunctionInputBinding = '';
  public modifyFocusGroup = this.fb.group(
      {focusGroupName: ['', Validators.required], focusGroupDescription: ['', Validators.required]}
  );

  public focusGroupMetadataEditMode = false;
  public ListOfUsersForFocusGroupOfSerever: any;
  public numberOfUsersForServerFocusGroupAveragePageSize = 3;
  public totalNumberOfusersForServerFocusGroup = 0;
  public numberOfUsersForServerFocusGroupCurrentPage = 0;
  public pageEventUsersPerServerFocusGroup: any;
  constructor(public dialogRef: MatDialogRef<FocusGroupPopupComponent>, private userAndEnvironmentService: UserAndEnvironmentService,
              @Inject(MAT_DIALOG_DATA) public data: FocusGroupDialogData, private profileService: ProfileService, private fb: FormBuilder) {
    console.log(JSON.stringify(data));
    this.modifyFocusGroup = this.fb.group(
        {focusGroupName: [data.group.name, Validators.required], focusGroupDescription: [data.group.description, Validators.required]}
    );
  }

  ngOnInit(): void {
    this.parameterUserSearchForFocusGroup( this.data.group.id,
        this.profileService.getServer()['envId'], this.numberOfUsersForServerFocusGroupCurrentPage,
        this.numberOfUsersForServerFocusGroupAveragePageSize,
        this.focusGroupSearchFunctionInputBinding);
  }
  updateFocusGroupMetadata() {
    this.data.group.name = this.modifyFocusGroup.value['focusGroupName'];
    this.data.group.description = this.modifyFocusGroup.value['focusGroupDescription'];
    this.focusGroupMetadataEditMode = false;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  clearFocusGroupUserSearch() {
    this.focusGroupSearchFunctionInputBinding = '';
  }

  setFocusGroupUserSearch() {
    this.numberOfUsersForServerFocusGroupCurrentPage = 0;
    this.parameterUserSearchForFocusGroup( this.data.group.id,
        this.profileService.getServer()['envId'], this.numberOfUsersForServerFocusGroupCurrentPage,
        this.numberOfUsersForServerFocusGroupAveragePageSize,
        this.focusGroupSearchFunctionInputBinding);
    }

  addSelectedUser(usr: any) {

  }

  handlePageUsersPerServerFocusGroup(event: any) {
    console.log('current page ', event.pageIndex);
    this.numberOfUsersForServerFocusGroupCurrentPage = event.pageIndex;
    if ( this.profileService.getServer()['envId'] && this.data.group.id) {
      this.parameterUserSearchForFocusGroup( this.data.group.id,
          this.profileService.getServer()['envId'], this.numberOfUsersForServerFocusGroupCurrentPage,
          this.numberOfUsersForServerFocusGroupAveragePageSize,
          this.focusGroupSearchFunctionInputBinding);
    }
  }

  private parameterUserSearchForFocusGroup(focusGroupId: number , environmentId: any,
                numberOfUsersForServerFocusGroupCurrentPage: number, numberOfUsersForServerFocusGroupAveragePageSize: number,
                focusGroupSearchFunctionInputBinding: string) {
    console.log(focusGroupSearchFunctionInputBinding);
      this.userAndEnvironmentService.invokeApiSearchUserBasedOnParamForFocusGroup(environmentId, focusGroupId ,
          numberOfUsersForServerFocusGroupCurrentPage, numberOfUsersForServerFocusGroupAveragePageSize,
          focusGroupSearchFunctionInputBinding ).subscribe(x => {
        this.ListOfUsersForFocusGroupOfSerever = x['content'];
        this.totalNumberOfusersForServerFocusGroup = x['totalElements'];
      });
  }
}
