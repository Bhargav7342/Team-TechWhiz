import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookappointments',
  templateUrl: './bookappointments.component.html',
  styleUrls: ['./bookappointments.component.css']
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
