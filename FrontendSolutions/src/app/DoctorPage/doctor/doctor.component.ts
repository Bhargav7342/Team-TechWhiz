import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DoctorService } from 'src/app/Service/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  docemail:string='';
  dname:string='';
  constructor(private router:Router,private docserve:DoctorService){
    const nav=this.router.getCurrentNavigation()?.extras.state as {email:string,dname:string}
    this.docemail=nav.email;
    this.dname=nav.dname;
    console.log(this.dname);
    console.log(this.docemail);
    this.docserve.getDoctorDetails(this.docemail).subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
  }
  ngOnInit(): void {
    this.router.navigate(['/doctorland'])
  }

}
