import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormsService } from "../../forms.service";


@Component({
  selector: 'app-updateCardLimits',
  templateUrl: 'updateCardLimits.component.html',
})
export class UpdateCardLimitsComponent implements OnInit {
    
  formJson : any;
  formName : String = 'updateCardLimits';  
  
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