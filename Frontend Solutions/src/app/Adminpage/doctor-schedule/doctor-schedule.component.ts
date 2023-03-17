import { Component } from '@angular/core';
import { AvailabilityComponent } from '../availability/availability.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent {
  constructor(private dialogbox:MatDialog){}
  doctor=[{
    name:'Dr.Syed Sohail', Deparatment:"cardialiogy"
  },
  {
    name:'Dr.Dhanush Reddy', Deparatment:"Emergency"
  },
  {
    name:'Dr.Sai Prasad', Deparatment:"gyno"
  },
  {
    name:'Dr.Sai Krishna', Deparatment:"ortho"
  }];

  openDialog(){
    this.dialogbox.open(AvailabilityComponent,{
      height:'400px',
      width:'500px'
    })
  }
}
