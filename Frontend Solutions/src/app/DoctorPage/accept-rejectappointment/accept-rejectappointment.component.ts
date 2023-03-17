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
    { name: 'John Doe', concerns: 'Fever' },
    { name: 'Jane Smith', concerns: 'Cough' },
    { name: 'Bob Johnson', concerns: 'Headache' },

  ];
  status!: string;

  accept() {
    this.status = 'Accept';
  }

  reject() {
    this.status = 'Reject';
  }
}
