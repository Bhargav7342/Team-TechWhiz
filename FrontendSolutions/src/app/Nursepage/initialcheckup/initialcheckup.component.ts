import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientIntialCheckup } from 'src/app/Models/database.models';
import { NurseService } from 'src/app/Service/nurse.service';

@Component({
  selector: 'app-initialcheckup',
  templateUrl: './initialcheckup.component.html',
  styleUrls: ['./initialcheckup.component.css']
})
export class InitialcheckupComponent implements OnInit{

  AddCheckUpDetail:PatientIntialCheckup={
    picId:'',
    appointmentId:'',
    height: 0,
    weight: 0,
    temperature:0,
    spo2:0,
    bloodPressure:'',
    sugarLevel:0,
    additionalDetails:'',
    chechupStatus:false,
  
  }

  constructor(private router:Router,private initialcheckupservice:NurseService,private route:ActivatedRoute){}

  email:string|any=''
  Id:string|any=''
  ngOnInit(): void {
  this.route.paramMap.subscribe({
    next:(params)=>{
      this.email=params.get('email');
    }
  });
  }
   add_Check_Up(item:any){
    this.initialcheckupservice.getPatientIdbyEmail(this.email).subscribe({
          next:(response)=>{
            console.log(response);
            this.initialcheckupservice.AddCheckUpDetails(item).subscribe({
              next:(res)=>{
                console.log(res);
                this.AddCheckUpDetail=res;
            
          }
        })
      }
    })
    this.router.navigate(['/nurse']);
  }
  allergies = new FormControl('');

  allergyList: string[] = ['None', 'Eggs', 'Fish', 'Cow-Milk', 'Shellfish', 'Peanuts', 'Soy', 'Wheat', 'Sesame', 'Sulphites', 'Mustard'];
}
