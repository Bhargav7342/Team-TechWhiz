import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allergy } from '../Models/database.models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AllergyService {
  baseApiUrl:string=environment.baseApiUrlallergy

  constructor(private http:HttpClient) { }



  AddAllergydetails(addallergies:Allergy):Observable<Allergy>
  {
    return this.http.post<Allergy>(this.baseApiUrl+'/Allergy',addallergies);
  }
}
