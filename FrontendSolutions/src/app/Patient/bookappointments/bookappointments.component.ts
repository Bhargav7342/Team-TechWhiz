import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DATE_FORMATS } from '@angular/material/core';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-bookappointments',
  templateUrl: './bookappointments.component.html',
  styleUrls: ['./bookappointments.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class BookappointmentsComponent {
  constructor(private router:Router){}
  bookAppointment(item: any) {
    console.log(item);
    //console.log(item.date.getDate())
  }

booked(){
  
  this.router.navigate(['/patientdashboard']);
}
}
