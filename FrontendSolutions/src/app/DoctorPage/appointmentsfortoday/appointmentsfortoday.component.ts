import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment, Patient } from 'src/app/Models/database.models';
import { DoctorService } from 'src/app/Service/doctor.service';
import { PatientServicesService } from 'src/app/Service/patient-services.service';

@Component({
  selector: 'app-appointmentsfortoday',
  templateUrl: './appointmentsfortoday.component.html',
  styleUrls: ['./appointmentsfortoday.component.css']
})
export class AppointmentsfortodayComponent implements OnInit{
  @Input() docid:string|any='';
  
  patient:Patient[]=[];
  appointments:Appointment[]=[];
  constructor(private router:Router,private doctorservice:DoctorService,private patientservice:PatientServicesService){}
  
 
  ngOnInit(): void {
    this.docid=sessionStorage.getItem('docId')
    console.log(this.docid+"ds")
    this.doctorservice.getAllAppointmetsBydoctorandstatus(this.docid,"Accepted").subscribe({
      next:(response)=>{
        this.appointments=response;
        console.log(response);
        response.forEach(element => {
          this.patientservice.getPatientById(element.patientId).subscribe({
            next:(res)=>{
              this.patient.push(res); 
              console.log(res); 
            }
          })
            
          });
      }
    })
   
    
  }
  added:boolean=false;

  

  handleClick(appId:string,pId:string){
    this.router.navigate(['/adddiagnosis'],{state:{appointmentId:appId,patientId:pId}});
  }
}
