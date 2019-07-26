import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormsService } from "../../forms.service";
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http'



@Component({
  selector: 'app-getCardDetails',
  templateUrl: 'getCardDetails.component.html',
  styles: ['button {margin : 5px;}']
})
export class GetCardDetailsComponent implements OnInit {

  formJson: any;
  messSucc: string = 'TransferAccountToAccount API call was ended with sucess ';
  messErr: string;
  showSucc: boolean = false;
  showErr: boolean = false;
  formName: String = 'cardDetails';
  cardInfoo: any = {};
  personInfoo: any = {};
  fieldss: FormlyFieldConfig[];
  form = new FormGroup({});
  model = {};


  ngOnInit() {

    this.get_jsonn();
    this.get_json();

  }

  constructor(private http: HttpClient, private formsService: FormsService) {

  }




  get_jsonn() {
    this.formsService.getForm(this.formName).subscribe((res) => {
      this.fieldss = res;

    })
  }
  get_json() {
    this.formsService.getUser().subscribe((res) => {
      this.formJson = res;
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


    return this.http.post<any>('http://10.1.50.210:9177/PowerCardConnectApi/jaxrs/GetCardDetailsWebService/V1/getCardDetails_10', merged, httpOptions).subscribe((res) => {

      if (res.errorCode == '00000' || res.errorCode == null) {
        // this.messSucc = this.messSucc + res.errorDesc
        this.showErr = false;
        this.showSucc = true;
        setTimeout(() => {
          this.showSucc = false;
        }, 4000);
        this.cardInfoo = res.card.cardInfo;
        this.personInfoo = res.card.personInfo;
        // this.form.reset();
        // console.log(this.cardInfoo);
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