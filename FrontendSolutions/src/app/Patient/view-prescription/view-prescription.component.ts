import { Component } from '@angular/core';

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.css']
})
export class ViewPrescriptionComponent {
  prescription= [
    {
      Medication: "Dolo650",
      Dosage: "1 - 0 - 1",
      Note: "Some tablebts",
    },
    {
      Medication: "Limc",
      Dosage: "1 - 0 - 1",
      Note: "When ever needed",
    },
    {
      Medication: "paracetamol",
      Dosage: "1 - 1 - 1",
      Note: "Daily 4 times",
    }
  ]; 
  displayedColumns: string[] = ['Medication', 'Dosage', 'Note'];
  dataSource = this.prescription
}
