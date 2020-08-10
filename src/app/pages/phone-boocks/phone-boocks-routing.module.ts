import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { PhoneBoockService } from '../../phone-boock.service'

import { PhoneBoocksComponent } from './phone-boocks.component';
import { BockEntryEditComponent } from './bock-entry-edit/bock-entry-edit.component';


const routes: Routes = [
  { path: '', component: PhoneBoocksComponent },
  { path: 'edit/:id', component: BockEntryEditComponent},
  { path: 'new', component: BockEntryEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule],
  providers: [ PhoneBoockService ]
})
export class PhoneBoocksRoutingModule { }
