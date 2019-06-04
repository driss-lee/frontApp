import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AuthGuard } from '../auth-guard';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from '@angular/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';


import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicComponent } from './dynamic.component';
import {CreateLoanComponent} from './createLoan/createLoan.component';
import {TransferComponent} from './transfer/transfer.component';
import {ChangePinComponent} from './changePin/changePin.component';
import {SearchCardComponent} from './searchCard/searchCard.component';
import {GetCardOperationListComponent} from './cardOperationList/getCardOperationList.component';
import {AddSupplementaryCardComponent} from './addSuppCard/addSupplementaryCard.component'
import {CreateDebitCardComponent} from './createDebitCard/createDebitCard.component'
import {ChangeCardProductComponent} from './changeCardProduct/changeCardProduct.component'
import {GetAppDocumentsComponent} from './getAppDocuments/getAppDocuments.component'
import {GetAuthorizationDetailsComponent} from './getAuthorizationDetails/getAuthorizationDetails.component'
import {UpdateCardLimitsComponent} from './updateCardLimits/updateCardLimits.component'
import {HomeComponent} from './home/home.component'

import {TestComponent} from './test/test.component'




const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyMaterialModule,
    MatNativeDateModule,
    FormlyMatDatepickerModule,
   

  ],
  declarations: [
    ...PAGES_COMPONENTS,
    DynamicFormComponent,
    CreateLoanComponent,
    TransferComponent,
    ChangePinComponent,
    SearchCardComponent,
    GetCardOperationListComponent,
    DynamicComponent,
    AddSupplementaryCardComponent,
    CreateDebitCardComponent,
    ChangeCardProductComponent,
    GetAppDocumentsComponent,
    GetAuthorizationDetailsComponent,
    UpdateCardLimitsComponent,
    TestComponent,
    HomeComponent
  ],
  providers: [
   AuthGuard
  ],
})
export class PagesModule {
}
