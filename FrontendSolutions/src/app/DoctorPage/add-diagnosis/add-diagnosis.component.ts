import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Allergy, Patient, PatientIntialCheckup, PhysicianAvailabilityStatus } from 'src/app/Models/database.models';
import { HealthhistoryComponent } from 'src/app/Patient/healthhistory/healthhistory.component';
import { ViewCheckUpComponent } from 'src/app/Patient/view-check-up/view-check-up.component';
import { ViewPrescriptionComponent } from 'src/app/Patient/view-prescription/view-prescription.component';
import { AllergyService } from 'src/app/Service/allergy.service';
import { AppointmentService } from 'src/app/Service/appointment.service';
import { NurseService } from 'src/app/Service/nurse.service';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
import { PrescriptionComponent } from '../add-prescription/prescription.component';
import { ViewPrescriptionDocComponent } from '../view-prescription-doc/view-prescription-doc.component';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.css']
})
export class AddDiagnosisComponent implements OnInit {
  patientId:string='';
  appointmentId:string='';
  prescriptions:any[]=[];
  allergy:Allergy[]=[];
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
  
  constructor(private dailog:MatDialog,private router:Router,private patientService:PatientServicesService,private appointmentService:NurseService,private allergyService:AllergyService){
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
    this.appointmentService.getCheckupInfo(this.appointmentId).subscribe({
      next:(response)=>{
        console.log(response);
        this.patientInitialDet=response;
      }
    });
    this.allergyService.getAllAllergy(this.appointmentId).subscribe({
      next:(response)=>{
        console.log(response);
        if(response!=null)
        {
          this.allergy=response;
        }
      }
    })
  }

  
 

  Clicked(){
    let dialogref=this.dailog.open(PrescriptionComponent);
    dialogref.afterClosed().subscribe(res=>{
      console.log(res);
      this.prescriptions.push(res.data);
      console.log(this.prescriptions);
    })
  }
  ViewPrescription(){
    this.dailog.open(ViewPrescriptionDocComponent,{
      height:'400px',width:'600px',
      data:{
        datakey:this.prescriptions
      }
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
