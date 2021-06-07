import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../auth/logged-in/profile.service';

@Component({
  selector: 'app-select-environment',
  templateUrl: './select-environment.component.html',
  styleUrls: ['./select-environment.component.css']
})
export class SelectEnvironmentComponent implements OnInit {

  public selectedServer:string;
  constructor(private profileService: ProfileService) { 
    profileService.getProfileSubject().subscribe(po=>{
      if(po)
        this.selectedServer=po.server
    });
  }
  public serversList:string[]=["Coffe Server","Tea Server","Milk Server","Coffe Tea Milk Server"];
  ngOnInit(): void {
  }

  setServer(server:string):void{
    this.profileService.setServer(server);
  }

}
