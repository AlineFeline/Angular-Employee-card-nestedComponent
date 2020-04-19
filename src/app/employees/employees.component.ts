import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent {

employee: any = {
  title: 'Employee Information',
  firstName: 'Karen',
  lastName: 'Smith',
  gender: 'F',
  age: 40,
  address: '23 Bayview ave',
  telephone: '416-321-1234',
  hourlyRate: 30.25,
  numberOfWorkDays: 5,
  numberOfHours: 7.5,
};
 getFullName(): string {
  return this.employee.firstName + ' ' + this.employee.lastName;
  }
 
calculateWeeklyPay(): number {
  return this.employee.numberOfWorkDays * this.employee.numberOfHours * this.employee.hourlyRate;
  }

}