import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { PhoneBoockService } from '../../phone-boock.service'

import { PhoneBoocksComponent } from './phone-boocks.component';

const routes: Routes = [
  { path: '', component: PhoneBoocksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule],
  providers: [ PhoneBoockService ]
})
export class PhoneBoocksRoutingModule { }
