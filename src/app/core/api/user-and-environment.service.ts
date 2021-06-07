import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAndEnvironmentService {

  readonly apiLocationGetListOfServersForUserL:string='/users/list-servers';
  readonly apiLocationGetListOfInvitesForUser:string="/users/list-invites";
  readonly apiLocationGetUserProfile:string="/users/profile";
  readonly apiLocationSendInviteToUser:string="/users/invite-to-server";
  readonly apiLocationAcceptInviteToJoinServer:string="/users/accept-invite-to-server";
  readonly apiLocationListUsersForAnEnvironment="/users/all-users-for-server";
  constructor() { }


}
