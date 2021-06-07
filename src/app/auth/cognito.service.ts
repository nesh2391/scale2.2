import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  constructor(private http: HttpClient) { }
  exchangeCodeWithToken(code_callback: string): Observable<any> {
    console.log("Callabck code : ", code_callback);
    return this.http.get<any>(environment.monoServerUrl+"/exchange-code-for-token", {
      params: { code: code_callback }
    });


  }

  exchangeTokenToGetUserName(id_token: string): Observable<any> {
    console.log("exchangeTokenToGetUserName ", id_token);
    const headers = new HttpHeaders({ 'id_token': id_token });
    return this.http.get<any>(environment.monoServerUrl+"/users/profile", { headers });
  }
}
