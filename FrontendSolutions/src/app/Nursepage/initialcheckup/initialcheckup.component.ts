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

  AddCheckUpDetail:any={
   
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
  allarr:string[]=[];
  ngOnInit(): void {
  this.route.paramMap.subscribe({
    next:(params)=>{
      this.Id=params.get('appointmentId');
    }
  });
  }
   add_Check_Up(item:PatientIntialCheckup){
   
    this.AddCheckUpDetail.appointmentId=this.Id
    this.AddCheckUpDetail.height=item.height
    this.AddCheckUpDetail.weight=item.weight
    this.AddCheckUpDetail.temperature=item.temperature
    this.AddCheckUpDetail.spo2=item.spo2
    this.AddCheckUpDetail.bloodPressure=item.bloodPressure
    this.AddCheckUpDetail.sugarLevel=item.sugarLevel
    this.AddCheckUpDetail.additionalDetails=item.additionalDetails
    console.log(this.AddCheckUpDetail);

    
  
          this.initialcheckupservice.AddCheckUpDetails(item).subscribe({
              next:(res)=>{
                console.log(res);
                this.AddCheckUpDetail=res;
                window.alert("Details Added successfully");
            
          }
        })
      
  
    this.router.navigate(['/nurse']);
  }
  allergies = new FormControl('');

  allergyList: string[] = ['None', 'Eggs', 'Fish', 'Cow-Milk', 'Shellfish', 'Peanuts', 'Soy', 'Wheat', 'Sesame', 'Sulphites', 'Mustard'];
}
