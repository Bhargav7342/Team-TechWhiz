import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Models/database.models';
import { AvailabilityService } from 'src/app/Service/availability.service';
import { AddAvailabilityComponent } from '../add-availability/add-availability.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  constructor(private dialogbox:MatDialog,private availabilityService:AvailabilityService,private router:Router){}

  doctor:Doctor={
    doctorId:'',
    doctorName:'',
    email:'',
    qualification:'',
    department:''
  }
  docid:string="";

  AddDoctor(item:any) {
    console.log(item);
    this.availabilityService.addDoctor(item).subscribe({
      next: (response) => {
        sessionStorage.setItem('addDocId', response.doctorId);
        console.log(response)
        this.doctor = response;
        console.log(this.doctor.doctorId);
        window.alert("Failed");

        this.dialogbox.open(AddAvailabilityComponent, {
          height: '400px',
          width: '500px',
          data: {
            dataKey: response.doctorId
          }
        })
        
      },
      error:(e)=>{
      window.alert("Failed")
      }
    });
  }
}
