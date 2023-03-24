import { Component, OnInit,Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Appointment, Patient } from 'src/app/Models/database.models';
import { DoctorService } from 'src/app/Service/doctor.service';
import { NurseService } from 'src/app/Service/nurse.service';
import { PatientServicesService } from 'src/app/Service/patient-services.service';

@Component({
  selector: 'app-accept-rejectappointment',
  templateUrl: './accept-rejectappointment.component.html',
  styleUrls: ['./accept-rejectappointment.component.css']
})
export class AcceptRejectappointmentComponent implements OnInit{
  
  status:string=''
 docId:string=''
 patients:Patient[]=[];
 appointments:Appointment[]=[];

  
  constructor(private router:Router,private doctorservice:DoctorService,private patientservice:PatientServicesService,private appointmentservice:NurseService){
    const nav=this.router.getCurrentNavigation()?.extras.state as{doctorId:string}
    this.docId=nav.doctorId
  }
  ngOnInit(): void {
 
    this.doctorservice.getAllAppointmetsBydoctorandstatus(this.docId,"Sent").subscribe({
      next:(response)=>{
        this.appointments=response;
        console.log(response);
        response.forEach(element => {
          this.patientservice.getPatientById(element.patientId).subscribe({
            next:(res)=>{
              this.patients.push(res); 
              console.log(res); 
            }
          })
            
          });
      }
    })
    
  }
 


  accept() {
    this.status = 'Accept';
  }

  reject() {
    this.status = 'Reject';
  }
}
