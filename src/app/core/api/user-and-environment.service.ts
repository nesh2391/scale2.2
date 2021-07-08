import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAndEnvironmentService {

  readonly apiLocationGetListOfServersForUser: string = '/users/list-servers';
  readonly apiLocationGetListOfInvitesForUser: string = '/users/list-invites';
  readonly apiLocationGetUserProfile: string = '/users/profile';
  readonly apiLocationSendInviteToUser: string = '/users/invite-to-server';
  readonly apiLocationAcceptInviteToJoinServer: string = '/users/accept-invite-to-server';
  readonly apiLocationListUsersForAnEnvironment = '/users/all-users-for-server';
  readonly apiLocationCreateServer = '/server/create-server';
  readonly apiLocationUploadPersonImage = '/api/server/upload-dp';
  readonly apiLocationGetUserEnvironmentRelation = '/api/users/user-environment-relation';
  readonly apiLocationGerPendingInvitesForServer = '/api/server/get-pending-invites';
  readonly apiLocationGetCountOfpendinginvitesForServer = '/api/server/count-pending-invites';
  readonly apiLocationCreateFocusGroups = '/api/server/create-focus-group';
  readonly apiLocationSearchForUserBasedOnParam = '/api/users/search-users';

  constructor(private http: HttpClient) { }

  invokeApiCreateServer(serverName: string, serverDescription: string): Observable<any> {
    let params = new HttpParams();
    params = params.append( 'server-name', serverName );
    params = params.append('server-description', serverDescription);
    return this.http.post<any>(environment.monoServerUrl + this.apiLocationCreateServer, null, {params: params});
  }

  invokeApiGetListOfServersForUser(): Observable<any> {
    return this.http.get<any>(environment.monoServerUrl + this.apiLocationGetListOfServersForUser);
  }

  invokeApiGetListOfInvitesForUser(): Observable<any> {
    return this.http.get<any>(environment.monoServerUrl + this.apiLocationGetListOfInvitesForUser);
  }

  invokeApiGetUserProfile(): Observable<any> {
    return this.http.get<any>(environment.monoServerUrl + this.apiLocationGetUserProfile);
  }

  invokeApiSendInviteToUser(): Observable<any> {
    return null;
  }

  invokeApiUploadUserImage(body: any):  Observable<any> {
    return this.http.post<any>(environment.monoServerUrl + this.apiLocationUploadPersonImage, body);
  }

  invokeApiAcceptInviteToJoinServer(): Observable<any> {
    return null;
  }

  /**
   * <p>call api to get all users for an environment</p>
   *
   * @param environmentId : the current environment
   * @param pageNumber    : the page we want to display
   * @param pageSize      : the size of the page
   * @param getDp         : do we need the Display picture
   */
  invokeApiListUsersForAnEnvironment(environmentId: string, pageNumber: number, pageSize: number ): Observable<any> {
    let params = new HttpParams();
      params = params.append( 'env-id', environmentId );
      params = params.append('pageNumber', String(pageNumber) );
      params = params.append('pageSize', String(pageSize) );
    return this.http.get<any>(environment.monoServerUrl + this.apiLocationListUsersForAnEnvironment, { params });
  }
  // exchangeTokenToGetUserName(id_token: string): Observable<any> {
  //   console.log("exchangeTokenToGetUserName ", id_token);
  //   const headers = new HttpHeaders({ 'id_token': id_token });
  //   return this.http.get<any>(environment.monoServerUrl+"/users/profile", { headers });
  // }

  invokeApiGetUserEnvironmentRelation(environmentId: string) {
    let params = new HttpParams();
    params = params.append( 'env-id', environmentId );
    return this.http.get<any>(environment.monoServerUrl + this.apiLocationGetUserEnvironmentRelation, { params });
  }

  invokeApiInviteUserToServer(environmentId: string, invitedPersonEmail: string) {
    let params = new HttpParams();
    params = params.append( 'env-id', environmentId );
    params = params.append( 'email', invitedPersonEmail );
    return this.http.post<any>(environment.monoServerUrl + this.apiLocationSendInviteToUser, null, {params: params});
  }

  invokeApiGetPendingInvitesForServer(environmentId: string, pageNumber: number, pageSize: number) {
    let params = new HttpParams();
    params = params.append( 'env-id', environmentId );
    params = params.append('pageNumber', String(pageNumber) );
    params = params.append('pageSize', String(pageSize) );
    return this.http.get<any>(environment.monoServerUrl + this.apiLocationGerPendingInvitesForServer,  {params: params});
  }

  invokeApiCountPendingInvitesForServer(environmentId: string) {
    let params = new HttpParams();
    params = params.append( 'env-id', environmentId );
    return this.http.get<any>(environment.monoServerUrl + this.apiLocationGetCountOfpendinginvitesForServer, {params: params});
  }

  invokeApiCreateFcousGroups(environmentId: string, focusGroupName: string, focusGroupDescription: string) {
    let params = new HttpParams();
    params = params.append( 'env-id', environmentId );
    params = params.append( 'fcs-name', focusGroupName );
    params = params.append( 'fcs-description', focusGroupDescription );
    return this.http.post<any>(environment.monoServerUrl + this.apiLocationCreateFocusGroups, null, {params: params});
  }

  invokeApiSearchUserBasedOnParam(environmentId: string, pageNumber: number, pageSize: number, searchparam: string) {
    let params = new HttpParams();
    params = params.append( 'env-id', environmentId );
    params = params.append('pageNumber', String(pageNumber) );
    params = params.append('pageSize', String(pageSize) );
    params = params.append('search-p', String(searchparam) );
    return this.http.get<any>(environment.monoServerUrl + this.apiLocationSearchForUserBasedOnParam, {params: params});
  }

}
