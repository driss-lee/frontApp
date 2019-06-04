import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormsService } from "../../forms.service";


@Component({
  selector: 'app-createDebitCard',
  templateUrl: 'createDebitCard.component.html',
})
export class CreateDebitCardComponent implements OnInit {
    
  formJson : any;
  formName : String = 'createDebitCard';  

  ngOnInit(){
    this.get_json();
  
    }

  constructor(private http : HttpClient, private formsService : FormsService) {
 
  }
  
  
  get_json()  {
    this.formsService.getForm(this.formName).subscribe((res)=>{
      this.formJson = res;
    })
}
}