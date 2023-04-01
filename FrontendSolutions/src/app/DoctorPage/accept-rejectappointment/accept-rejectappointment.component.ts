import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomdatePipe } from 'src/app/customdate.pipe';
import { Appointment, Patient } from 'src/app/Models/database.models';
import { AppointmentService } from 'src/app/Service/appointment.service';
import { DoctorService } from 'src/app/Service/doctor.service';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
import { AddedsnackComponent } from 'src/app/Snackbars/addedsnack/addedsnack.component';
import { AppointmentacceptedComponent } from 'src/app/Snackbars/appointmentaccepted/appointmentaccepted.component';
import { AppointmentrejectedComponent } from 'src/app/Snackbars/appointmentrejected/appointmentrejected.component';

@Component({
  selector: 'app-accept-rejectappointment',
  templateUrl: './accept-rejectappointment.component.html',
  styleUrls: ['./accept-rejectappointment.component.css'],
  providers: [CustomdatePipe]
})
export class AcceptRejectappointmentComponent implements OnInit{
  
 status:string=''
 docId:string=''
 pemail:string=''
 date:string=''
 patients:Patient[]=[];
 appointments:Appointment[]=[];

  
  constructor(private _snackBar: MatSnackBar,private emailservice:AppointmentService,private router:Router,private doctorservice:DoctorService,private patientservice:PatientServicesService,private appointmentservice:AppointmentService,private custdate:CustomdatePipe){
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

  

  accept(appId:string,patemail:string,datenow:string) {
    console.log(datenow);

    this.date=this.custdate.transform(datenow);
    this.pemail=patemail
    this.appointmentservice.updateAppointmentStatus(appId,"Accepted").subscribe({
      next:(response)=>{
        this.emailservice.sendEmail(this.pemail,this.date,"Accepted").subscribe({
          next:(response)=>{
              console.log(response);  
            }
          });
        console.log(response);
        this._snackBar.openFromComponent(AppointmentacceptedComponent, {
          duration: 2 * 1000,
        });
        this.router.navigate(['/pendingAppointments'])
      }
    });
  }

  reject(appId:string,patemail:string,datenow:string) {
    this.status = 'Reject';
    this.date=this.custdate.transform(datenow);
    this.pemail=patemail

    this.appointmentservice.updateAppointmentStatus(appId,"Rejected").subscribe({
      next:(response)=>{
        this.emailservice.sendEmail(this.pemail,this.date,"Rejected").subscribe({
          next:(response)=>{
              console.log(response);  
            }
          });
          this._snackBar.openFromComponent(AppointmentrejectedComponent, {
            duration: 2 * 1000,
          });
        console.log(response);
        this.router.navigate(['/pendingAppointments'])
      }
    })
  }
}
