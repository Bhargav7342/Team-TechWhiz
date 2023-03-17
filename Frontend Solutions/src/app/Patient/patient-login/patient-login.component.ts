import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {
  constructor(private router:Router){}
  signinFunc(event: any){
    console.log(event);
    this.router.navigate(['/padash']);
  }

  @Output() newItemEvent=new EventEmitter<string>();
  addNewItem(status:string){
    this.newItemEvent.emit(status)
  }
}
