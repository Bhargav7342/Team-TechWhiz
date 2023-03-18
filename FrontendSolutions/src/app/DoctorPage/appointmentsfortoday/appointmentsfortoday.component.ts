import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointmentsfortoday',
  templateUrl: './appointmentsfortoday.component.html',
  styleUrls: ['./appointmentsfortoday.component.css']
})
export class AppointmentsfortodayComponent {

  constructor(private router:Router){}
  added:boolean=false;
  patients = [
    { name: 'John Doe', concerns: 'Fever' },
    { name: 'Jane Smith', concerns: 'Cough' },
    { name: 'Bob Johnson', concerns: 'Headache' },
    { name:'sai',concerns:'sdfgh'}
  ];


  handleClick(){
    this.router.navigate(['/adddiagnosis']);
  }
}
