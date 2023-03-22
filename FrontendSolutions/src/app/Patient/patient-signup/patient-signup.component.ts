import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomdatePipe } from 'src/app/customdate.pipe';
import { Patient } from 'src/app/Models/database.models';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};


@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class PatientSignupComponent {

  constructor(private router:Router,private patientService:PatientServicesService){}
  addPatient:Patient={
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
    bloodGroup:'',
  }
  signup(item: any){
    console.log(item.DateOfBirth);
    this.addPatient=item;
    console.log(item.DateOfBirth)
    this.addPatient.dateOfBirth=item.DateOfBirth
    console.log(this.addPatient.dateOfBirth)
    this.patientService.patientRegister(item).subscribe({
      next:(response)=>{
        this.addPatient=item;
        
        console.log(response);
        console.log(item.DateOfBirth);
        window.alert("Sign Up Successfull....Welcome...!")
        this.router.navigate(['/plogin']);
      }
    })
    
  }
}
