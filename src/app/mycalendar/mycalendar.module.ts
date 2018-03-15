import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycalendarComponent } from './mycalendar.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MycalendarComponent],
  declarations: [MycalendarComponent]
})
export class MycalendarModule { }
