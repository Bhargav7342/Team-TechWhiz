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
    PicId:'',
    AppointmentId:'',
    Height: 0,
    Weight: 0,
    Temperature:0,
    Spo2:0,
    BloodPressure:'',
    SugarLevel:0,
    AdditionalDetails:'',
    ChechupStatus:false,
  
  }

  constructor(private router:Router,private initialcheckupservice:NurseService,private route:ActivatedRoute){}

  id:string|any=''
  ngOnInit(): void {
  this.route.paramMap.subscribe({
    next:(params)=>{
      this.id=params.get('appointmentId');
    }
  });
  }
   add_Check_Up(item:any){
    console.log(item);
    
    this.AddCheckUpDetail=item
    this.AddCheckUpDetail.AppointmentId=this.id
    console.log(this.AddCheckUpDetail);
    // this.initialcheckupservice.AddCheckUpDetails(item).subscribe({
    //   next:(res)=>{
    //     console.log(res);
    //   }
    // })
    this.router.navigate(['/nurse']);
  }
  allergies = new FormControl('');

  allergyList: string[] = ['None', 'Eggs', 'Fish', 'Cow-Milk', 'Shellfish', 'Peanuts', 'Soy', 'Wheat', 'Sesame', 'Sulphites', 'Mustard'];
}
