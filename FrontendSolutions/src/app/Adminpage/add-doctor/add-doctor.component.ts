import { Component } from '@angular/core';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  bookAppointment(item: any) {
    console.log(item);
    //console.log(item.date.getDate())
  }
}
