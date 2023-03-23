import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

import { Output,EventEmitter } from '@angular/core';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
import { Patient } from 'src/app/Models/database.models';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {
  constructor(private router:Router,private patientService:PatientServicesService){}


  signinFunc(event: any){
        console.log(event.Email);
    this.patientService.patientLogin(event.Email,event.Password).subscribe({
      next:(response)=>{
        console.log(response);
        
        sessionStorage.setItem('pid',response.patientId);
        sessionStorage.setItem('pemail',response.email);
        
        window.alert("Sign In Successfull");
        
        this.router.navigate(['/patientdashboard']);
      },
      error:(e)=>{
        window.alert("Login Failed");
      }
    })
  }
}

