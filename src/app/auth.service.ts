import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  API_URL : string = 'http://localhost:8080/myapp/auth';
  API_URLL : string = 'http://localhost:8080/myapp/addUser';


  constructor(private http : HttpClient) { }

  public auth(user : any): Observable<any> {
    return this.http.post<any>(this.API_URL, user)

  }

  public register(user : any): Observable<any> {
    return this.http.post<any>(this.API_URLL,user)

  }
}


