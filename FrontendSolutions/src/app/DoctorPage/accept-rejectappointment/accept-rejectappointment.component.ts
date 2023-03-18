import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-accept-rejectappointment',
  templateUrl: './accept-rejectappointment.component.html',
  styleUrls: ['./accept-rejectappointment.component.css']
})
export class AcceptRejectappointmentComponent {
  constructor(private router:Router){}
  patients = [
    { name: 'John Doe', concerns: 'Fever',date:'12-MAR-2023' },
    { name: 'Jane Smith', concerns: 'Cough',date:'14-MAR-2023' },
    { name: 'Bob Johnson', concerns: 'Headache',date:'11-MAR-2023' },

  ];
  status!: string;

  accept() {
    this.status = 'Accept';
  }

  reject() {
    this.status = 'Reject';
  }
}
