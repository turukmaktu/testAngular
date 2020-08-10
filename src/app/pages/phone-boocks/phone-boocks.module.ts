import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

import { PhoneBoocksRoutingModule } from './phone-boocks-routing.module';
import { PhoneBoocksComponent } from './phone-boocks.component';
import { BockEntryEditComponent } from './bock-entry-edit/bock-entry-edit.component';


@NgModule({
  declarations: [
    PhoneBoocksComponent,
    BockEntryEditComponent
  ],
  imports: [
    CommonModule,
    PhoneBoocksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PhoneBoocksModule { }
