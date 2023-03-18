import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointmenthistory',
  templateUrl: './appointmenthistory.component.html',
  styleUrls: ['./appointmenthistory.component.css']
})
export class AppointmenthistoryComponent {


  constructor(private router:Router){}
  added:boolean=false;
appointments = [
  { date:'03-12-22', doctor: 'John Doe', concerns: 'Fever' ,status:'Sent'},
  { date:'05-12-22', doctor: 'Jane Smith', concerns: 'Cough', status:'Accepted' },
  { date:'09-12-22', doctor: 'Bob Johnson', concerns: 'Headache', status:'Rejected' },
  { date:'12-12-22', doctor: 'John Doe', concerns: 'Fever' ,status:'Sent'},
  { date:'11-12-22', doctor: 'Jane Smith', concerns: 'Cough', status:'Accepted' },
  { date:'12-12-22', doctor: 'Bob Johnson', concerns: 'Headache', status:'Rejected' }
];





handleClick(){

  this.added=true;

}
bookAppointment(){
  this.router.navigate(['/book']);
}
}
