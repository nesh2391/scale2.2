import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../auth/logged-in/profile.service';
import {UserAndEnvironmentService} from '../api/user-and-environment.service';
import {FormControl, FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-select-environment',
  templateUrl: './select-environment.component.html',
  styleUrls: ['./select-environment.component.css']
})
export class SelectEnvironmentComponent implements OnInit {

  public selectedServer: any = {name: '', envId : 0};
  public serversList: string[] = ['Coffe Server', 'Tea Server', 'Milk Server', 'Coffe Tea Milk Server'];
  public returnedServerObject: any ;
  public test: String = ' ';
  public invitesArray: any[];
  public serverCreateAndAcceptInviteToggle: String = 'select';
  public createServerForm = this.fb.group({
    serverName: ['', [Validators.required, Validators.maxLength(100),  Validators.minLength(5), Validators.pattern('[-_a-zA-Z0-9 ]*')]],
    serverDescription: ['', [Validators.required, Validators.max(100), Validators.pattern('[-_a-zA-Z0-9 .\']*')]],
    acceptedTandC: ['', Validators.required]
  });


  constructor(private profileService: ProfileService, private userAndEnvironmentService: UserAndEnvironmentService, private fb: FormBuilder) {
    profileService.getProfileSubject().subscribe(po => {
      if ( po ) {
        this.selectedServer = po.server;
      }
    });
    // debugger
    // userAndEnvironmentService.invokeApiGetListOfServersForUser().subscribe(x => {
    //   console.log(JSON.stringify(x));
    //   this.returnedServerObject = x;
    //   this.test = JSON.stringify(this.returnedServerObject);
    // });
    this.invokeOrRefreshListOfServers();
  }

  ngOnInit(): void {
    this.getInvitesToJoinAServerForUser();
  }

  invokeOrRefreshListOfServers() {
    this.userAndEnvironmentService.invokeApiGetListOfServersForUser().subscribe(x => {
      console.log(JSON.stringify(x));
      this.returnedServerObject = x;
      this.test = JSON.stringify(this.returnedServerObject);
    })
  }

  getInvitesToJoinAServerForUser() {
    this.userAndEnvironmentService.invokeApiGetListOfInvitesForUser().subscribe(x => {
      console.log(JSON.stringify(x));
      this.invitesArray = x;
    });
  }

  setServer(server: string): void {
    this.profileService.setServer(server);
    this.userAndEnvironmentService.invokeApiGetUserEnvironmentRelation(server['envId']).subscribe(x => {
        this.profileService.setServerRelation(x);
    });
  }

  onSubmitCreateServer() {
    console.log( 'Server From:', this.createServerForm.value);
    this.userAndEnvironmentService.invokeApiCreateServer(this.createServerForm.value['serverName'],this.createServerForm.value['serverDescription']).subscribe(result=>{
      console.log(result);
      this.invokeOrRefreshListOfServers();
      this.createServerForm.reset();
    })
  }


}
