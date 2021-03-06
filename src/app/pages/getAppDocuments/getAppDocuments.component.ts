import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormsService } from "../../forms.service";
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-getAppDocuments',
  templateUrl: 'getAppDocuments.component.html',
  styleUrls: ['./getAppDocuments.component.scss']

})
export class GetAppDocumentsComponent implements OnInit {

  messSucc: string = 'GetApplicationDocuments API call was ended with sucess ';
  messErr: string;
  showSucc: boolean = false;
  showErr: boolean = false;
  formJson: any;
  formName: String = 'appDocuments';
  appDocument: any[];
  form = new FormGroup({});
  model = {};
  fieldss: FormlyFieldConfig[];

  ngOnInit() {
    this.get_jsonn();
    this.get_json();

  }

  constructor(private http: HttpClient, private formsService: FormsService) {

  }

  get_jsonn() {
    this.formsService.getForm(this.formName).subscribe((res) => {
      this.fieldss = res;
      console.log(this.fieldss);

    })
  }

  get_json() {
    this.formsService.getUser().subscribe((res) => {
      this.formJson = res;
      console.log(this.formJson);
    })
  }

  submit() {
    console.log(this.model);
    console.log(this.formJson);
    var merged = Object.assign({}, this.formJson, this.model);
    console.log(merged);
    console.log(JSON.stringify(merged));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-control-Allow-Methods': '*',
        'Access-control-Allow-Header': '*'

      })
    };


    return this.http.post<any>('http://10.1.50.210:9177/PowerCardConnectApi/jaxrs/GetApplicationDocumentsWebService/V1/getApplicationDocuments_10', merged, httpOptions).subscribe((res) => {

      if (res.errorCode == '00000') {
        // this.messSucc=this.messSucc + res.errorDesc
        this.showErr = false;
        this.showSucc = true;
        setTimeout(() => {
          this.showSucc = false;
        }, 4000);
        this.appDocument = res.applicationDocument;
        // this.form.reset();
      }
      else {
        this.messErr = res.errorDesc;
        this.showSucc = false;
        this.showErr = true;
      }

      console.log("response" + JSON.stringify(res));
    });


  }
}