import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initialcheckup',
  templateUrl: './initialcheckup.component.html',
  styleUrls: ['./initialcheckup.component.css']
})
export class InitialcheckupComponent {
  constructor(private router:Router){}
  add_Check_Up(item:any){
    console.log(item);
    this.router.navigate(['/nurse']);
  }
  allergies = new FormControl('');

  allergyList: string[] = ['None', 'Eggs', 'Fish', 'Cow-Milk', 'Shellfish', 'Peanuts', 'Soy', 'Wheat', 'Sesame', 'Sulphites', 'Mustard'];
}
