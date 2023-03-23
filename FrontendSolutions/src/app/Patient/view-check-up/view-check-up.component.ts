import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientIntialCheckup } from 'src/app/Models/database.models';
import { NurseService } from 'src/app/Service/nurse.service';
import { PatientServicesService } from 'src/app/Service/patient-services.service';

@Component({
  selector: 'app-view-check-up',
  templateUrl: './view-check-up.component.html',
  styleUrls: ['./view-check-up.component.css']
})


export class ViewCheckUpComponent implements OnInit{
  checkupdata:PatientIntialCheckup={
    picId :'',
    appointmentId :'',
    height :0,
    weight :0,
    temperature :0,
    spo2 :0,
    bloodPressure :'',
    sugarLevel :0,
    additionalDetails :'',
    chechupStatus :false,
  }
  dummydata:any;
  appointmentId:string|any='';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private checkupservice:NurseService){
    this.appointmentId=this.data.dataKey
    console.log(this.appointmentId)
  }
  status:string='';
  ngOnInit(): void {

    this.checkupservice.getCheckupInfo(this.appointmentId).subscribe({
      next:(response)=>{
        console.log(response);
        this.checkupdata=response;
        console.log(this.checkupdata)
      }
    })
  }
}
