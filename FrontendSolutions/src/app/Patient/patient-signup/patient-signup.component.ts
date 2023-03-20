import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomdatePipe } from 'src/app/customdate.pipe';
import { Patient } from 'src/app/Models/database.models';
import { PatientServicesService } from 'src/app/Service/patient-services.service';


@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent {

  constructor(private router:Router,private patientService:PatientServicesService){}
  addPatient:Patient={
    patientId:'',
    FirstName:'',
    LastName:'',
    Email:'',
    Password:'',
    Phone:'',
    Gender:'',
    DateOfBirth:'',
    City:'',
    State:'',
    Zipcode:'',
    BloodGroup:'',
  }
  signup(item: any){
    
    this.patientService.patientRegister(item).subscribe({
      next:(response)=>{
        this.addPatient=item;
        console.log(response);
        console.log(item.DateOfBirth.toLocaleDateString());
        window.alert("Sign Up Successfull....Welcome...!")
        this.router.navigate(['/plogin']);
      }
    })
    
  }
}
