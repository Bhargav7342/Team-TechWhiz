import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  
  @Input() patientId:string|null=''; 
  pid:string|any='';
  

  ngOnInit(): void {
    this.pid=this.patientId;
    console.log(this.pid)
  }
}
