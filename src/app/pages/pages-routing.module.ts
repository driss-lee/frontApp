import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AuthGuard } from '../auth-guard';
import {TransferComponent} from './transfer/transfer.component';
import { CreateLoanComponent } from './createLoan/createLoan.component';
import {ChangePinComponent} from './changePin/changePin.component';
import {SearchCardComponent} from './searchCard/searchCard.component';
import {GetCardOperationListComponent} from './cardOperationList/getCardOperationList.component';
import {AddSupplementaryCardComponent} from './addSuppCard/addSupplementaryCard.component'
import {CreateDebitCardComponent} from './createDebitCard/createDebitCard.component'
import {ChangeCardProductComponent} from './changeCardProduct/changeCardProduct.component'
import {GetAppDocumentsComponent} from './getAppDocuments/getAppDocuments.component'
import {GetAuthorizationDetailsComponent} from './getAuthorizationDetails/getAuthorizationDetails.component'
import {UpdateCardLimitsComponent} from './updateCardLimits/updateCardLimits.component'
import {TestComponent} from './test/test.component'
import {HomeComponent} from './home/home.component'




const routes: Routes = [{
  path: '',
  component: PagesComponent, canActivate: [AuthGuard],
  children: [{
    path: 'dashboard',
    component: ECommerceComponent, 
  },
  {
    path: 'transfer',
    component: TransferComponent,
  },
  {
    path: 'createLoan',
    component: CreateLoanComponent,
  },
  {
    path: 'changePin',
    component: ChangePinComponent,
  },
    {
    path: 'searchCard',
    component: SearchCardComponent,
  },
    {
    path: 'getCardOperationList',
    component: GetCardOperationListComponent,
  },
    {
    path: 'addSupplementaryCard',
    component: AddSupplementaryCardComponent,
  },
    {
    path: 'createDebitCard',
    component: CreateDebitCardComponent,
  },
    {
    path: 'changeCardProduct',
    component: ChangeCardProductComponent,
  },
    {
    path: 'getAppDocuments',
    component: GetAppDocumentsComponent,
  },
    {
    path: 'getAuthorizationDetails',
    component: GetAuthorizationDetailsComponent,
    
  },
    {
    path: 'updateCardLimits',
    component: UpdateCardLimitsComponent,
    
  },
    {
    path: 'test',
    component: TestComponent,
    
  },
  {
    path: 'home',
    component: HomeComponent,
    
  },
  {
    path: 'iot-dashboard',
    component: DashboardComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'modal-overlays',
    loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule',
  }, {
    path: 'extra-components',
    loadChildren: './extra-components/extra-components.module#ExtraComponentsModule',
  }, {
    path: 'bootstrap',
    loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
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
