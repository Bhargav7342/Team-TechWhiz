import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PhysicianAvailabilityStatus } from 'src/app/Models/database.models';
import { AvailabilityService } from 'src/app/Service/availability.service';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent {
  
  days:PhysicianAvailabilityStatus =({
    availabilityId :'',
    doctorId:'',
    monday: true,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday:true,
  });

  constructor(private _formBuilder: FormBuilder,private router:Router,private availabilityservice:AvailabilityService) {}
  status:boolean=true;
  saveAvailability() {
    console.log()
    console.log(this.days);
    this.router.navigate(['/admin']);
  }
}
