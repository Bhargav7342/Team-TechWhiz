import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhysicianAvailabilityStatus } from 'src/app/Models/database.models';
import { AvailabilityService } from 'src/app/Service/availability.service';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit{
  
  days:PhysicianAvailabilityStatus =({
    availabilityId :'',
    doctorId:'',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday:false,
  });

  email:string | any='';
  docid:string|any =''
  constructor(private route:ActivatedRoute,private _formBuilder: FormBuilder,private router:Router,private availabilityservice:AvailabilityService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
         this.email=params.get('email');
      }
    });
    this.availabilityservice.getDoctorIdbyEmail(this.email).subscribe({
      next:(response)=>{
        console.log(response);
        this.availabilityservice.getStatusByDoctorId(response.doctorId).subscribe({
          next:(response1)=>{
            console.log(response1);
            this.days=response1
          }
        })
      }
    })
    console.log(this.docid);
    
  }
  saveAvailability() {
    this.availabilityservice.updateDoctorAvailablity(this.days).subscribe({
      next:(resonse)=>{
        console.log(resonse);
        window.alert("Successfully Changed");
        this.router.navigate(['/admin']);
      }
    })
    
  }
}
