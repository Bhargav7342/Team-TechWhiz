import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent {

  constructor(private router:Router){}
  patients = [
    { name: 'John Doe', Doctor:'mounika', concerns: 'Fever' },
    { name: 'Jane Smith',Doctor:'mona', concerns: 'Cough' },
    { name: 'Bob Johnson',Doctor:'jessy', concerns: 'Headache' },
    { name:'vandana', Doctor:'sindhu',concerns:'Cold'},

  ]
     added:boolean=false;

       disablebutton(){
        this.added=true;
        this.router.navigate(['addcheck']);

       }
      }

