import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Doctor, PhysicianAvailabilityStatus } from '../Models/database.models';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  baseApiUrl:string=environment.baseApiUrlavail;

  constructor(private http:HttpClient) { }

  addDoctor(doctor:any):Observable<Doctor>
  {
    return this.http.post<Doctor>(this.baseApiUrl+'/Doctor/AddDoctor',doctor);
  }

  
  addAvailability(doctorAvailability:PhysicianAvailabilityStatus):Observable<PhysicianAvailabilityStatus>
  {
    return this.http.post<PhysicianAvailabilityStatus>(this.baseApiUrl+'/PhysicianAvailabilityStatus/AddAvailability',doctorAvailability);
  }


  getAllDoctor():Observable<Doctor[]>
  {
    return this.http.get<Doctor[]>(this.baseApiUrl+'/Doctor/GetAllDoctors');
  }
}
