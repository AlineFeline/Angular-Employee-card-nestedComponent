/* 
The purpose of this lab is to: 
A) continue practicing creating properties and methods
B) display an Employee's Information using a nested component.

Part A:
1. Create a component and its template for employees.
2. The component should have the following properties and values: 
    a) title, with value: 'Employee Information'   
    b) employee object property of datatype any with the following values: 
    firstName: 'Karen',
    lastName: 'Smith',
    gender: 'F',
    age: 40,
    address: '23 Bayview ave',
    telephone: '416-321-1234',
    hourlyRate: 30.25,
    numberOfWorkDays: 5,
    numberOfHours: 7.5
3. Create a method called getFullName which returns the first name and last name of the employee
4. Create a method called getAge which returns the age
5. Create a method called calculateWeeklyPay which returns the calculated weekly pay.
6. Display the data with the following headings in the template using interpolation
a) Display title
b) Display the full name of the employee 
Note. use the keyword 'this' in order to be able to referene the object when using employee object in the methods.

Part B:
Create a nested component that will handle displaying the employee's information. (name of component employees-detail.component)
a)Display the employee's age with the heading Age using concatenation
b)Display the employee's address with the heading Address using concatination
c)Display the employee's telephone with the heading Telf using concatination

Hint: Use the @Input decorator to get the data from the container/parent component

Part C:
 Style your components using CSS, get creative and have fun styling your programs.
*/
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
