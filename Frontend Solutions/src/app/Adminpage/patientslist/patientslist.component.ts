import { Component } from '@angular/core';

@Component({
  selector: 'app-patientslist',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css']
})
export class PatientslistComponent {
  patients=[{
    name:'Syed Sohail', Email:"solu@gmail.com",Phone:"9632172588" ,age:22,Gender:"Male"
  },
  {
    name:'Dhanush Reddy', Email:"dhanush@gmail.com",Phone:"9632172588" ,age:23,Gender:"Male"
  },
  {
    name:'Sai Prasad', Email:"saip@gmail.com",Phone:"9632172588" ,age:24,Gender:"Male"
  },
  {
    name:'Sai Krishna', Email:"saik@gmail.com",Phone:"9632172588" ,age:24,Gender:"Male"
  }];
 
  displayedColumns: string[] = ['Name', 'Email','Phone', 'Age', 'Gender'];
  dataSource = this.patients;
}
