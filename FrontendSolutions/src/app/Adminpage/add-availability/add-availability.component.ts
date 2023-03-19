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
  styleUrls: ['./add-availability.component.css']
})
export class AddAvailabilityComponent {
  constructor(private _formBuilder: FormBuilder,private router:Router,private availabilityService:AvailabilityService,@Inject(MAT_DIALOG_DATA) public data:any) {}
   docid:string| any=sessionStorage.getItem('addDocId')
   days:PhysicianAvailabilityStatus=({
    availabilityId :'',
    doctorId:this.docid,
    sunday:false,
    monday:false,
    tuesday:false,
    wednesday:false,
    thursday:false,
    friday:false,
    saturday:false,
   })
  addAvailability(item:any){

    this.availabilityService.addAvailability(item).subscribe({
      next:(response)=>
      window.alert("Availability added for the Doctor")
    })
    this.router.navigate(['/admin'])
  }
}
