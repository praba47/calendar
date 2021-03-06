import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MycalendarModule } from './mycalendar/mycalendar.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MycalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
