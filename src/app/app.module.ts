import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesDetailComponent } from './employeesdetail/employees-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, EmployeesComponent, EmployeesDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
