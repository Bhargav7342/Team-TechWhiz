import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Allergy, Patient, PatientIntialCheckup, PhysicianAvailabilityStatus } from 'src/app/Models/database.models';
import { HealthhistoryComponent } from 'src/app/Patient/healthhistory/healthhistory.component';
import { ViewCheckUpComponent } from 'src/app/Patient/view-check-up/view-check-up.component';
import { ViewPrescriptionComponent } from 'src/app/Patient/view-prescription/view-prescription.component';
import { AllergyService } from 'src/app/Service/allergy.service';
import { AppointmentService } from 'src/app/Service/appointment.service';
import { DoctorService } from 'src/app/Service/doctor.service';
import { NurseService } from 'src/app/Service/nurse.service';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
import { PrescriptionComponent } from '../add-prescription/prescription.component';
import { ViewHealthHistoryDocComponent } from '../view-health-history-doc/view-health-history-doc.component';
import { ViewPrescriptionDocComponent } from '../view-prescription-doc/view-prescription-doc.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddedsnackComponent } from 'src/app/Snackbars/addedsnack/addedsnack.component';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.css']
})
export class AddDiagnosisComponent implements OnInit {
  patientId:string='';
  appointmentId:string='';
  docemail:string='';
  prescriptions:any[]=[];
  allergy:Allergy[]=[];
  diagnosis:string='';
  doctorName="";
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
    
  }

  
  constructor(private _snackBar: MatSnackBar,private dialogbox: MatDialog,private dailog:MatDialog,private router:Router,private patientService:PatientServicesService,private nurseService:NurseService,private allergyService:AllergyService,private docService:DoctorService,private appointmentService:AppointmentService){
    const nav=this.router.getCurrentNavigation()?.extras.state as{appointmentId:string,patientId:string,docname:string,docemail:string}
    this.appointmentId=nav.appointmentId;
    this.patientId=nav.patientId;
    this.doctorName=nav.docname;
    this.docemail=nav.docemail;

  }
  ngOnInit(): void {
    this.patientService.getPatientById(this.patientId).subscribe({
      next:(response)=>{
        console.log(response);
        this.patientDet = response;
      }
    });
    this.nurseService.getCheckupInfo(this.appointmentId).subscribe({
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
    this.router.navigate(['/doctor'],{state:{email:this.docemail,dname:this.doctorName}});
  }

  Save(){
    var hhId:string='';
    const diagData:any={
      patientId:this.patientId,
      date:new Date().toISOString().slice(0, 10),
      doctorName:this.doctorName,
      diagnosis:this.diagnosis,
      appointmentId:this.appointmentId
    }
    this.docService.AddHealthHistory(diagData).subscribe({
      next:(response)=>{
        console.log(response);
        hhId=response.hhId
        if(hhId!='')
        {
          this.prescriptions.forEach(element=>{
            const item1:any={
              hhId:hhId,
              medicineName:element.medicineName,
              dosage:element.dosage,
              note:element.note
            }
            this.docService.AddPrescription(item1).subscribe({
              next:(response)=>{
                console.log(response);
              },
              error:(response)=>{
                console.log(response);
              }
            })
          })
        }
        this.appointmentService.updateAppointmentStatus(this.appointmentId,"Completed").subscribe({
          next:(res)=>{
            console.log(res);
          }
        })
        this._snackBar.openFromComponent(AddedsnackComponent, {
          duration: 3 * 1000,
        });
      },
      error:(response)=>{
        console.log(response);
      }
   
    })
    
    console.log(this.prescriptions);

    
    this.router.navigate(['/doctor'],{state:{email:this.docemail,dname:this.doctorName}});
  }


  viewHealthHistory(){

    // this.router.navigate(['/healthHistoryDoctor'],{state:{pId:this.patientId,fromOut:true}});
    this.dialogbox.open(ViewHealthHistoryDocComponent,{
      height:'700px',
      width:'1000px',
      data:{
        dataKey:{
          pId:this.patientId,fromOut:true
        }
      }
    })

  }
}
