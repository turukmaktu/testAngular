import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

import { PhoneBoocksRoutingModule } from './phone-boocks-routing.module';
import { PhoneBoocksComponent } from './phone-boocks.component';

@NgModule({
  declarations: [
    PhoneBoocksComponent
  ],
  imports: [
    CommonModule,
    PhoneBoocksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PhoneBoocksModule { }
