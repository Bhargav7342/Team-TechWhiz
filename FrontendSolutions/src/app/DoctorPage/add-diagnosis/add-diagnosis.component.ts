import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Patient, PatientIntialCheckup, PhysicianAvailabilityStatus } from 'src/app/Models/database.models';
import { HealthhistoryComponent } from 'src/app/Patient/healthhistory/healthhistory.component';
import { ViewCheckUpComponent } from 'src/app/Patient/view-check-up/view-check-up.component';
import { ViewPrescriptionComponent } from 'src/app/Patient/view-prescription/view-prescription.component';
import { AppointmentService } from 'src/app/Service/appointment.service';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
import { PrescriptionComponent } from '../add-prescription/prescription.component';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.css']
})
export class AddDiagnosisComponent implements OnInit {
  patientId:string='';
  appointmentId:string='';
  patientDet:Patient={
    patientId:'',
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phone:'',
    gender:'',
    dateOfBirth:'',
    city:'',
    state:'',
    zipcode:'',
    bloodGroup:''
  }
  patientInitialDet:PatientIntialCheckup={
    picId :'',
    appointmentId :'',
    height :0,
    weight :0,
    temperature :0,
    spo2 :0,
    bloodPressure :'',
    sugarLevel :0,
    additionalDetails :'',
    chechupStatus :false
  }
  
  constructor(private dailog:MatDialog,private router:Router,private patientService:PatientServicesService,private appointmentService:AppointmentService){
    const nav=this.router.getCurrentNavigation()?.extras.state as{appointmentId:string,patientId:string}
    this.appointmentId=nav.appointmentId;
    this.patientId=nav.patientId;
  }
  ngOnInit(): void {
    this.patientService.getPatientById(this.patientId).subscribe({
      next:(response)=>{
        console.log(response);
        this.patientDet = response;
      }
    });
    this.appointmentService.getInitialCheckUp(this.appointmentId).subscribe({
      next:(response)=>{
        console.log(response);
        this.patientInitialDet=response;
      }
    })
  }

  Allergy="None";
 

  Clicked(){
    this.dailog.open(PrescriptionComponent)
  }
  ViewPrescription(){
    this.dailog.open(ViewPrescriptionComponent,{
      height:'400px',width:'600px'
    })
  }
  goBack()
  {
    this.router.navigate(['\appToday']);
  }

  Save(){
    this.router.navigate(['/doctor']);
  }
  viewHealthHistory(){

    this.router.navigate(['/healthhistory'],{state:{pId:this.patientId,fromOut:true}});

  }
}
