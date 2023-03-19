import { Component, OnInit } from '@angular/core';
import { AvailabilityComponent } from '../availability/availability.component';
import { MatDialog } from '@angular/material/dialog';
import { Doctor } from 'src/app/Models/database.models';
import { AvailabilityService } from 'src/app/Service/availability.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent implements OnInit {
  doctor:Doctor[]=[];
  constructor(private dialogbox:MatDialog,private doctorservice:AvailabilityService,private router:Router){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.doctorservice.getAllDoctor().subscribe({
      next:(response)=>{
        console.log(response)
        this.doctor=response
      },
      error:(e)=>{
        window.alert("Something is wrong");
      }
    })
  }
  ngOnInit(): void {
    
  }
  
  openDialog(){
    this.dialogbox.open(AvailabilityComponent,{
      height:'400px',
      width:'500px'
    })
  }
}
