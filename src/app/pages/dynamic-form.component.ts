import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.component.html' ,
  styles: [
    `
    .error { color: red; }

    #button1 , #button2 {
      display:inline-block;
      }
    `
  ]
})
export class DynamicFormComponent implements OnInit {
 
  @Input() dataObject;
  form: FormGroup;
  objectProps;
  doesDataExist: boolean = false;

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

  
  
 
  onSubmit(form) {
    console.log(form);
  }
}
