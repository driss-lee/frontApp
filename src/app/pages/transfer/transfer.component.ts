import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormsService } from "../../forms.service";


@Component({
  selector: 'app-transfer',
  templateUrl: 'transfer.component.html',
  
})
export class TransferComponent implements OnInit {
    
  formJson : any;
  formName : String = 'transfer';  
  //isChecked = true;

  ngOnInit(){
    this.get_json();
  
    }

  constructor(private http : HttpClient, private formsService : FormsService) {
 
  }
  
  /*toggleDiv(i) {
    this.isChecked = (i===1);
  }*/
  get_json()  {
    this.formsService.getForm(this.formName).subscribe((res)=>{
      this.formJson = res;
    })
  }
}