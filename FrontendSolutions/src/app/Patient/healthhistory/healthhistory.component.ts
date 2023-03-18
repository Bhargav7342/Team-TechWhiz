import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewCheckUpComponent } from '../view-check-up/view-check-up.component';
import { ViewPrescriptionComponent } from '../view-prescription/view-prescription.component';

@Component({
  selector: 'app-healthhistory',
  templateUrl: './healthhistory.component.html',
  styleUrls: ['./healthhistory.component.css']
})
export class HealthhistoryComponent {
  constructor(private dialogbox: MatDialog){}

  openDiaog(){
    this.dialogbox.open(ViewPrescriptionComponent,{
      height:'300px',
      width:'600px'
    });
  }
  health=[{
    date:"12/03/2023",
    doctor:"sam",
    dignosis:"everything look good"
  },
  {
    date:"1/03/2023",
    doctor:"john",
    dignosis:"everything looks Great"
  },
  {
    date:"3/03/2023",
    doctor:"jack",
    dignosis:"everything looks something"
  }
]
openDialog2(){
  this.dialogbox.open(ViewCheckUpComponent,{
    height:'300px',
    width:'700px'
  })
}

}
