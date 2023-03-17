import { Component } from '@angular/core';

@Component({
  selector: 'app-view-check-up',
  templateUrl: './view-check-up.component.html',
  styleUrls: ['./view-check-up.component.css']
})
export class ViewCheckUpComponent {
  checkup=[
    {
      height:"158",
      weight:"69",
      spO2:"80",
      temp:"98",
      bp:"120/80",
      sugar:"200",
      allergy:["skin","eye"],
      additional:"Nothing"
    }
  ]
}
