import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dynamic-forma',
  templateUrl: 'dynamic.component.html' ,
  styles: [
    `
    .error { color: red; }

    #button1 , #button2 {
      display:inline-block;
      }
    `
  ]
})
export class DynamicComponent implements OnInit {
 
  @Input() dataObject;
  form: FormGroup;
  objectProps;
  showLabel: boolean = false;


  constructor() {
  }


  ngOnInit() {
    // remap the API to be suitable for iterating over it
    this.objectProps = 
      Object.keys(this.dataObject)
        .map(prop => {
          return Object.assign({}, {key :prop} ,this.dataObject[prop]);
        });

    // setup the form
    const formGroup = {};
    for(let prop of Object.keys(this.dataObject)) {
      formGroup[prop] = new FormControl(this.dataObject[prop].value || '');
    }

    this.form = new FormGroup(formGroup);
  }

    changeAction(e) {
    if(e === "Y") {
      this.showLabel = true;
    } else {
      this.showLabel = false;
    }
  }
  
 
  onSubmit(form) {
    console.log(form);
  }
}
