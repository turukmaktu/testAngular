import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

import { TraksRoutingModule } from './traks-routing.module';
import { TraksComponent } from './traks.component';

@NgModule({
  declarations: [TraksComponent],
  imports: [
    CommonModule,
    TraksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TraksModule { }
