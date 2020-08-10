import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: '', loadChildren: () => import('./pages/phone-boocks/phone-boocks.module').then(m => m.PhoneBoocksModule) },
  
  { path: 'traks', loadChildren: () => import('./pages/traks/traks.module').then(m => m.TraksModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
