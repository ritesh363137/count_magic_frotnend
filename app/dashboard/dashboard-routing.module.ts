import { NgModule }from'@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { DashboardPage } from './dashboard.page';



const routes: Routes = [

  { path: '',component: DashboardPage },

  { path: 'pcash',loadChildren: () => import('./pcash/pcash.module').then( m => m.PcashPageModule) },
  { path: 'pbank',loadChildren: () => import('./pbank/pbank.module').then( m => m.PbankPageModule)},
  { path: 'ppaytm',loadChildren: () => import('./ppaytm/ppaytm.module').then( m => m.PpaytmPageModule)},
  { path: 'pcheque',loadChildren: () => import('./pcheque/pcheque.module').then( m => m.PchequePageModule)},

  { path: 'rcash',loadChildren: () => import('./rcash/rcash.module').then( m => m.RcashPageModule)},
  { path: 'rbank',loadChildren: () => import('./rbank/rbank.module').then( m => m.RbankPageModule)},
  { path: 'rpaytm',loadChildren: () => import('./rpaytm/rpaytm.module').then( m => m.RpaytmPageModule)},
  { path: 'rcheque',loadChildren: () => import('./rcheque/rcheque.module').then( m => m.RchequePageModule)},

  { path: 'nonempform',loadChildren: () => import('./nonempform/nonempform.module').then( m => m.NonempformPageModule)},
  { path: 'empform',loadChildren: () => import('./empform/empform.module').then( m => m.EmpformPageModule)},
  { path: 'businessform',loadChildren: () => import('./businessform/businessform.module').then( m => m.BusinessformPageModule)},

  { path: 'payment',loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)},
  { path: 'receive',loadChildren: () => import('./receive/receive.module').then( m => m.ReceivePageModule)},

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
