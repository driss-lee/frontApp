import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AuthGuard } from '../auth-guard';
import {TransferComponent} from './transfer/transfer.component';
import {GetCardDetailsComponent} from './getCardDetails/getCardDetails.component';
import {CreateDebitCardComponent} from './createDebitCard/createDebitCard.component'
import {GetAppDocumentsComponent} from './getAppDocuments/getAppDocuments.component'
import {UpdateFormComponent} from './updateForm/updateForm.component'


import {HomeComponent} from './home/home.component'




const routes: Routes = [{
  path: '',
  component: PagesComponent, canActivate: [AuthGuard],
  children: [
  {
    path: 'transfer',
    component: TransferComponent,
  },
    {
    path: 'getCardDetails',
    component: GetCardDetailsComponent,
  },
    {
    path: 'createDebitCard',
    component: CreateDebitCardComponent,
  },
    {
    path: 'getAppDocuments',
    component: GetAppDocumentsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    
  },
  {
    path: 'updateForm',
    component: UpdateFormComponent,
    
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
