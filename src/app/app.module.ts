import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './student-list/student-list.component';
import { StudentsDetailsComponent } from './student-details/student-details.component';
import { FormsModule } from '@angular/forms'; // חובה לשימוש ב-[(ngModel)]

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsDetailsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }