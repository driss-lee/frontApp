import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from "@angular/common/http";
import { FormsService } from "../../forms.service";
import { OnInit } from "@angular/core";
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
 
  styleUrls: ['./transfer.component.scss']

})


export class TransferComponent implements OnInit {

  messSucc:string ='TransferAccountToAccount API call was ended with sucess  ';
  messErr:string;
  showSucc:boolean=false;
  showErr:boolean=false;
  formJson: any;
  formName : String = 'transfer';  
   fieldss: FormlyFieldConfig[];
    

  ngOnInit() {
     this.get_jsonn();
    this.get_json();

  }


  constructor(private http: HttpClient, private formsService: FormsService) {

  }

  get_json() {
    this.formsService.getUser().subscribe((res) => {
      this.formJson = res;
      console.log(this.formJson);
    })
  }

get_jsonn()  {
 this.formsService.getForm(this.formName).subscribe((res)=>{
   this.fieldss = res;
         console.log(this.fieldss);

 })
  }


  form = new FormGroup({});
  model = {};


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
        'Access-control-Allow-Methods':'*',
        'Access-control-Allow-Header':'*'

      })
    };


    return this.http.post<any>('http://10.1.50.210:9177/PowerCardConnectApi/jaxrs/TransferAccountToAccountWebService/V1/transferAccountToAccount_10', merged, httpOptions).subscribe((res) => {
      
      if(res.errorCode == '00000'){
        
        this.showErr = false;
        this.showSucc= true;
        setTimeout(() => {
          this.showSucc = false;
        }, 4000);
      }
      else {
        this.messErr=res.errorDesc;
        this.showSucc=false;
        this.showErr=true;
      }

      console.log("response" + JSON.stringify(res));
      });


  }
}

