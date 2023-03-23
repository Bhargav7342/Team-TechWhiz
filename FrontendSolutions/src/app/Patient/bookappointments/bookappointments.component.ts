import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { AvailabilityService } from 'src/app/Service/availability.service';
import { Doctor } from 'src/app/Models/database.models';

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
  selector: 'app-bookappointments',
  templateUrl: './bookappointments.component.html',
  styleUrls: ['./bookappointments.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class BookappointmentsComponent {
  constructor(private router:Router,private availabilityService:AvailabilityService){}
  bookAppointment(item: any) {
    console.log(item);
    console.log(item.doctor.split(",",2));
    //console.log(item.date.getDate())
    //this.router.navigate(['/patientdashboard']);
  }
  date1:string='';
  currDate:Date=new Date();
  availableDoctors:Doctor[]=[];

  findDocter(){
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const date = new Date(this.date1);
  console.log(weekday[date.getDay()]);
  this.availabilityService.getAllDoctorbyAvailability(weekday[date.getDay()]).subscribe({
    next:(response)=>{
      console.log(response);
      this.availableDoctors=response;
    }
  })

}
}
