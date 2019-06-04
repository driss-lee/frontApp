import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from "@angular/common/http";
import { FormsService } from "../../forms.service";
import { OnInit } from "@angular/core";
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app',
  template: `
    <div class="row">
        <div class="col-md-6">
              
          <<nb-card>
          <nb-card-header>TransferAccountToAccount API</nb-card-header>
                <nb-card-body> 
                    <form role="form" novalidate [formGroup]="form" (ngSubmit)="submit()">
                      <formly-form [model]="model" [fields]="fields" [form]="form">
                      <div id="container">
                        <button  type="submit" color="primary" mat-raised-button>Submit</button>
                        <button  type="reset" (click)="form.reset()" color="primary" mat-raised-button>Reset</button>
                      </div>
                      </formly-form>
                    </form>
                </nb-card-body>
            </nb-card>
        </div>
        <strong>Form Value</strong>
    <pre>{{ form.value | json }}</pre>
      </div>
  `,
  styleUrls: ['./test.component.scss']

})
export class TestComponent implements OnInit {

  formJson: any;

  ngOnInit() {
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


  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: "srcAccountNbr",
      type: 'input',
      templateOptions: {
        required: true,
        type: 'number',
        label: 'Src Account Nbr',
      }
    },
    {
      key: 'destAccountNbr',
      type: 'input',
      templateOptions: {
        required: true,
        type: 'number',
        label: 'Dest Account Nbr',
      }
    },
    {
      key: 'reversalFlag',
      type: 'radio',
      templateOptions: {
        label: 'Reversal Flag',
        required: true,
        options: [
          { value: 'N', label: 'N' },
          { value: 'R', label: 'R' }
        ],
      }
    },
    {
      key: 'captureReasonCode',
      type: 'input',
      templateOptions: {
        label: 'Capture Reason Code',
        required: true,
        type: 'text',

      }
    },

    {
      key: 'transferAmount',
      templateOptions: { label: 'Transfer Amount' },
      fieldGroup: [{
        key: 'amt',
        type: 'input',
        templateOptions: {
          required: true,
          type: 'number',
          label: 'amt',
        },
      },
      {
        key: "cureCode",
        type: 'input',
        templateOptions: {
          type: 'number',
          label: 'cureCode',
        },
      }
      ]
    },
    {
      key: 'transactionDate',
      type: 'datepicker',
      templateOptions: {
        label: 'Datepicker',

        required: true,
      },
    },
  ];

  submit() {
    console.log(this.model);
    console.log(this.formJson);
    var merged = Object.assign({}, this.formJson, this.model);
    console.log(merged);
    console.log(this.formJson);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-control-Allow-Methods':'*',
        'Access-control-Allow-Header':'*'

      })
    };


    return this.http.post<any>('http://10.1.50.210:9177/PowerCardConnectApi/jaxrs/TransferAccountToAccountWebService/V1', merged, httpOptions).subscribe((res) => {
        console.log("response" + JSON.stringify(res));
      });


  }
}


