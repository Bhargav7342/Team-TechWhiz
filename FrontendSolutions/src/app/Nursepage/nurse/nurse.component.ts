import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Models/database.models';
import { NurseService } from 'src/app/Service/nurse.service';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})



export class NurseComponent  implements OnInit{

  patients:Appointment[]=[];

   today: Date = new Date(); 
   dateString: string = this.today.toISOString().slice(0, 10); 
   
  

  constructor(private router:Router,private appointmentService:NurseService){
    
  }
  ngOnInit(): void {
   console.log(this.dateString);
   this.appointmentService.getAllAppointmets(this.dateString).subscribe({
    next:(response)=>{
      this.patients=response;
      console.log(response);
    },
    error:(response)=>{
      window.alert("Something is wrong");
    }
   })
  }

 
 


 

     added:boolean=false;

       disablebutton(){
        this.added=true;
        this.router.navigate(['addcheck']);

       }
      
      }

