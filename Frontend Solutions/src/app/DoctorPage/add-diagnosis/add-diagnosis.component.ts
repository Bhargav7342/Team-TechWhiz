import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PrescriptionComponent } from '../add-prescription/prescription.component';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.css']
})
export class AddDiagnosisComponent {

  constructor(private dailog:MatDialog){}
  pname="Jonny";
  bg="A +ve";
  Age=25;
  Height=175;
  SPO2=98;
  SugarLevel="normal";
  Allergy="None";
  Gender="Male";
  Weight=65;
  BP=100;
  Temp=102;
  Additional="Nothing";

  Clicked(){
    this.dailog.open(PrescriptionComponent)
  }
  ViewPrescription(){

  }
}
