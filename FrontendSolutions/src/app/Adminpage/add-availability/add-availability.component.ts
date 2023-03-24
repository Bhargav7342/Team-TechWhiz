import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Doctor, PhysicianAvailabilityStatus } from 'src/app/Models/database.models';
import { AvailabilityService } from 'src/app/Service/availability.service';
import { AvailabilityComponent } from '../availability/availability.component';

@Component({
  selector: 'app-add-availability',
  templateUrl: './add-availability.component.html',
})
export class AddAvailabilityComponent {
  constructor(private _formBuilder: FormBuilder,private router:Router,private availabilityService:AvailabilityService,@Inject(MAT_DIALOG_DATA) public data:any) {}
  
  days:PhysicianAvailabilityStatus=({
    availabilityId :'',
    doctorId:'',
    sunday:false,
    monday:false,
    tuesday:false,
    wednesday:false,
    thursday:false,
    friday:false,
    saturday:false,
   })
  addAvailability(item:any){
    this.days=item
    this.days.doctorId=this.data.dataKey
    console.log(this.data)
    this.availabilityService.addAvailability(this.days).subscribe({
      next:(response)=>{
      console.log(response)
      window.alert("Availability added for the Doctor")
      }
    })
    
    this.router.navigate(['/admin'])
  }
}
