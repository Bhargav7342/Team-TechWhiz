import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Patient } from 'src/app/Models/database.models';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
import { EditprofileComponent } from '../editprofile/editprofile.component';
// import { EditPageComponent } from '../edit-page/edit-page.component';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  
  
  @Input() patientId:string|null=''; 
  pid:string|any='';
  signupobj: Patient={
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
  };
  constructor(public dialog: MatDialog, private patientService : PatientServicesService) {}

  ngOnInit(): void {
    this.pid=this.patientId;
    console.log(this.pid);
    this.patientService.getPatientById(this.pid).subscribe({
      next:(response)=>{
        console.log(response);
        this.signupobj = response;
      }
    })

  }
  
    //address: string = this.signupobj.city + ', ' + this.signupobj.state + ', ' + this.signupobj.zipcode; 

  editprofile(){
    this.dialog.open(EditprofileComponent, {
      height:'500px',
      width:'50%',
      data: this.signupobj,
    
    });
  }
  
}
