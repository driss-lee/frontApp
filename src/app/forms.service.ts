import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})

export class FormsService {

  API_URL : String = 'http://localhost:8080/myapp/forms/list';
  API_URLL : string = 'http://localhost:8080/myapp/list/userpc/1';


  constructor(private http : HttpClient) { }

  public getForm(form: String): Observable<any> {
    return this.http.get<any>(this.API_URL+'/'+form)

  }

  public getUser(): Observable<any> {
    return this.http.get<any>(this.API_URLL)

  }
}


