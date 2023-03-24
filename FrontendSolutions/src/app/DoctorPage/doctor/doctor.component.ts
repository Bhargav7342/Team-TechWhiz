import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DoctorService } from 'src/app/Service/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  docemail:string='';
  dname:string='';
  docid:string='';
  constructor(private router:Router,private docserve:DoctorService){
    const nav=this.router.getCurrentNavigation()?.extras.state as {email:string,dname:string}
    this.docemail=nav.email;
    this.dname=nav.dname;
    this.docserve.getDoctorDetails(this.docemail).subscribe({
      next:(response)=>{
        this.docid=response.doctorId;
        console.log(response)
      }
    })
  }

  PendingAppointments()
  {
    this.router.navigate(["/pendingAppointments"],{state:{doctorId:this.docid}});
  }
  }

