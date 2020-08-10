import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraksComponent } from './traks.component';

const routes: Routes = [{ path: '', component: TraksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraksRoutingModule { }
