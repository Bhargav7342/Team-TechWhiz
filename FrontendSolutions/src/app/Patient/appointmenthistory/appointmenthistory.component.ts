import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Models/database.models';
import { AppointmentService } from 'src/app/Service/appointment.service';

@Component({
  selector: 'app-appointmenthistory',
  templateUrl: './appointmenthistory.component.html',
  styleUrls: ['./appointmenthistory.component.css']
})
export class AppointmenthistoryComponent implements OnInit {
 @Input() patientId:string|null=''; 

  pid=this.patientId

  appointments:Appointment[]=[];
  constructor(private router:Router,private appointmentService:AppointmentService){
  }
  ngOnInit(): void {
    if(this.patientId!=null){
   this.appointmentService.getAppointmentByPatientId(this.patientId).subscribe({
    next:(response)=>{
      this.appointments=response;
      console.log(response[0].doctorName);
      console.log(this.appointments)
    },
    error:(response)=>{
      window.alert("Something is wrong");
    }
   })
  }}
  added:boolean=false;
// appointment's = [
//   { date:'03-12-22', doctor: 'John Doe', concerns: 'Fever' ,status:'Sent'},
//   { date:'05-12-22', doctor: 'Jane Smith', concerns: 'Cough', status:'Accepted' },
//   { date:'09-12-22', doctor: 'Bob Johnson', concerns: 'Headache', status:'Rejected' },
//   { date:'12-12-22', doctor: 'John Doe', concerns: 'Fever' ,status:'Sent'},
//   { date:'11-12-22', doctor: 'Jane Smith', concerns: 'Cough', status:'Accepted' },
//   { date:'12-12-22', doctor: 'Bob Johnson', concerns: 'Headache', status:'Rejected' }
// ];





handleClick(){

  this.added=true;

}
bookAppointment(){
  console.log(this.patientId);
  this.router.navigate(['/book']);
}
}
