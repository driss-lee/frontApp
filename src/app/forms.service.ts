import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent,HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})

export class FormsService {

  API_URL : string = 'http://localhost:8080/myapp/forms/list';
  API_URLL : string = 'http://localhost:8080/myapp/list/userpc/1';
  API_URLLL : string = 'http://localhost:8080/myapp/forms/uploadForm';
  API_URLLLL : string = 'http://localhost:8080/myapp/forms/deleteForm';



  constructor(private http : HttpClient) { }

  public getForm(form: String): Observable<any> {
    return this.http.get<any>(this.API_URL+'/'+form)

  }

  public deleteForm(form: String): Observable<any> {
    return this.http.delete<any>(this.API_URLLLL+'/'+form)

  }



    public uploadForm(file: File) : Observable<any>{
        const formdata : FormData = new FormData();
        formdata.append('file',file);
        return this.http.post<any>(this.API_URLLL, formdata);
     
  }

  public getUser(): Observable<any> {
    return this.http.get<any>(this.API_URLL)

  }
}


