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



import {TransferComponent} from './transfer/transfer.component';
import {GetCardDetailsComponent} from './getCardDetails/getCardDetails.component';
import {CreateDebitCardComponent} from './createDebitCard/createDebitCard.component'
import {GetAppDocumentsComponent} from './getAppDocuments/getAppDocuments.component'
import {UpdateFormComponent} from './updateForm/updateForm.component'
import {HomeComponent} from './home/home.component'

import { RepeatTypeComponent } from './repeat-section.type';
import { FormlyMatNativeSelectModule } from '@ngx-formly/material/native-select';





const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    FormlyMatNativeSelectModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
      ],
    }),
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
    RepeatTypeComponent,
    TransferComponent,
    UpdateFormComponent,
    GetCardDetailsComponent,
    CreateDebitCardComponent,
    GetAppDocumentsComponent,
    HomeComponent
  ],
  providers: [
   AuthGuard
  ],
})
export class PagesModule {
}
