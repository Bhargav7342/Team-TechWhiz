import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent {

  constructor(private router:Router){}
  title = 'SIGNUP';
  remail:string="";
  rpassword:string="";
  rcname:string=""
  rcphonenumber:string="";
  rcGender:string="";
  rcBloodGroup:string="";
  rcAge:string="";
  rcCity:string="";
  rcState:string="";
  rcZipcode:string="";

  signup(item: any){
    console.log(item);
    this.router.navigate(['/plogin']);
  }
}
