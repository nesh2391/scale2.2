import { Component, OnInit } from '@angular/core';
import {UserAndEnvironmentService} from '../../api/user-and-environment.service';
import {ProfileService} from '../../../auth/logged-in/profile.service';
import {FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import {FocusGroupPopupComponent} from '../focus-group-popup/focus-group-popup.component';

@Component({
  selector: 'app-um-home',
  templateUrl: './um-home.component.html',
  styleUrls: ['./um-home.component.css']
})
export class UmHomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private toastr: ToastrService, private userAndEnvironmentService: UserAndEnvironmentService, private profileService: ProfileService, private fb: FormBuilder) { }
  animal: any;
  name: string;
  public selectedProfile: any;
  public selectedGroup: any;
  public server: any;
  public userEnvironmentRelation: any;
  public ListOfUsersForSerever = [];
  public totalNumberOfusersForserver = 0;
  public NumberOfUsersForServerAveragePageSize = 5;
  public NumberOfUsersForServerCurrentPage = 0;
  public pendingInvitesPageSize = 10;
  public totalNumberOfPendingInvites = 0 ;
  public currentPagePendingInvites = 0;
  public profileEditMode = false;
  public SearchFunctionInputBinding;
  public pageEventUsersPerServer: void;
  public searchableParamForUserSearch;
  public inviteFormEmailinvite = this.fb.group(
      {emailOrInvited: ['', Validators.required]}
  );

  public createFocusGroupFrom = this.fb.group(
      {focusGrupName:  ['', Validators.required], focusGrupDescription:  ['', Validators.required]}
  );

  public ListOfInvites = [];

  public groups = [
    {
      id: 1,
      name: 'My Group Name',
      description: 'Demo Group',
      members: [
        {name: 'It\'s a thing'},
        {name: 'This is a really long string to see how the text will overflow'},
        {name: 'It\'s a thing'}
      ]
    }
  ];
  pageEventPendingInvites: void;
  ngOnInit(): void {
    this.server = this.profileService.getServer();
    this.getUserEnvironmentRelation();
    const env = this.server['envId'];
    if (env) {
      this.getAllUsersForThisEnvironment(env, 0, this.NumberOfUsersForServerAveragePageSize );
      this.getCountOfPendingInvitesForEnvironment(env);
      this.getListOfPendingInvitesForEnvironment(env, this.currentPagePendingInvites, this.pendingInvitesPageSize);
    }
  }

  getAllUsersForThisEnvironment(environmentId: string, pageNumber: number, pageSize: number ) {
    this.userAndEnvironmentService.invokeApiListUsersForAnEnvironment(environmentId, pageNumber, pageSize).subscribe(x => {
      this.ListOfUsersForSerever =  x['content'] ;
      this.totalNumberOfusersForserver = x['totalElements'];
      return x;
    });
  }

  getCountOfPendingInvitesForEnvironment(environmentId: string) {
    this.userAndEnvironmentService.invokeApiCountPendingInvitesForServer(environmentId).subscribe(x => {
      this.totalNumberOfPendingInvites = x;
    });
  }

  getListOfPendingInvitesForEnvironment(environmentId: string, pageNumber: number, pageSize: number) {
    this.userAndEnvironmentService.invokeApiGetPendingInvitesForServer(environmentId, pageNumber, pageSize).subscribe(x => {
        this.ListOfInvites = x;
    });
  }

  handlePagePendingInvites(event: any) {
    console.log('pendingInvitesPageSize ', this.pendingInvitesPageSize);
    console.log('totalNumberOfPendingInvites ', this.totalNumberOfPendingInvites);
    console.log('currentPagePendingInvites ', event.pageIndex);
    this.currentPagePendingInvites = event.pageIndex;
    if (this.server['envId']) {
    this.getListOfPendingInvitesForEnvironment(this.server['envId'], this.currentPagePendingInvites, this.pendingInvitesPageSize);
    }
  }

  handlePageUsersPerServer(event: any) {
    if(this.searchableParamForUserSearch) {
      console.log(' Page ', event.pageIndex);
      this.NumberOfUsersForServerCurrentPage = event.pageIndex;
      this.parameterUserSearch(
          this.server['envId'], this.currentPagePendingInvites, this.NumberOfUsersForServerAveragePageSize,
          this.SearchFunctionInputBinding);
    } else {
      console.log('current Page ', event.pageIndex);
      this.NumberOfUsersForServerCurrentPage = event.pageIndex;
      const env = this.server['envId'];
      this.getAllUsersForThisEnvironment(env, this.NumberOfUsersForServerCurrentPage, this.NumberOfUsersForServerAveragePageSize);
    }
  }

  /**
   * clear user search on the main user management screen
   * the X button
   */
  clearUserSearch() {
    this.SearchFunctionInputBinding = null;
    this.currentPagePendingInvites = 0;
    this.getAllUsersForThisEnvironment( this.server['envId'], 0, this.NumberOfUsersForServerAveragePageSize );
  }

  /**
   * start the user search process
   */
  setUserSearch() {
    this.searchableParamForUserSearch = this.SearchFunctionInputBinding;
    if (this.searchableParamForUserSearch) {
      this.currentPagePendingInvites = 0;
      this.parameterUserSearch(
          this.server['envId'], this.currentPagePendingInvites, this.NumberOfUsersForServerAveragePageSize,
          this.SearchFunctionInputBinding);
    }
  }

  parameterUserSearch(environmentId: string, pageNumber: number, pageSize: number, searchparameter: string) {
    // tslint:disable-next-line:max-line-length
    this.userAndEnvironmentService.invokeApiSearchUserBasedOnParam( environmentId , pageNumber , pageSize , searchparameter).subscribe(x => {
      this.ListOfUsersForSerever =  x['content'] ;
      this.totalNumberOfusersForserver = x['totalElements'];
      return x;
    });
  }

  getUserEnvironmentRelation() {
    this.userEnvironmentRelation = this.profileService.getServerRelation();
  }

  userSelected(userSelected) {
    this.selectedProfile = userSelected;
  }

  removeInvite(inviteToBeRemoved) {

  }

  sendInviteToAddUserEmail() {
    this.userAndEnvironmentService.invokeApiInviteUserToServer( this.profileService.getServer()['envId'] , this.inviteFormEmailinvite.value['emailOrInvited']).subscribe(x => {
      this.inviteFormEmailinvite.reset();
      this.toastr.success('', 'Invite Sent');
    });
  }

  groupSelected(group: any) {
    this.selectedGroup = group;
    this.openDialog(group);
  }

  createGroup() {
    this.userAndEnvironmentService.invokeApiCreateFcousGroups(this.profileService.getServer()['envId'], this.createFocusGroupFrom.value['focusGrupName'] , this.createFocusGroupFrom.value['focusGrupDescription']).subscribe( x => {
      this.createFocusGroupFrom.reset();
      this.toastr.success('', 'Created');
        }
    );
  }

  openDialog(group: any): void {
    const dialogRef = this.dialog.open(FocusGroupPopupComponent, {
      width: '500px',
      data: {group: group}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = JSON.stringify(result);
    });
  }

  callUserSearchLogic() {

  }

  addMember() {
  }
}
