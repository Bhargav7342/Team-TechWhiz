import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prescription } from 'src/app/Models/database.models';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
@Component({
  selector: 'app-view-prescription-doc',
  templateUrl: './view-prescription-doc.component.html',
  styleUrls: ['./view-prescription-doc.component.css']
})
export class ViewPrescriptionDocComponent implements OnInit {
  prescription:any[]=[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit(): void {
    console.log(this.data);
    this.prescription=this.data.datakey;
    console.log(this.prescription)
    this.dataSource=this.prescription
  }
  displayedColumns: string[] = ['Medication', 'Dosage', 'Note'];
  dataSource=this.prescription;
  
}
