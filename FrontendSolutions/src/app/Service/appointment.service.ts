import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Appointment } from '../Models/database.models';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseApiUrl:string=environment.baseApiUrl1;

  constructor(private http:HttpClient) { }

  getAppointmentByPatientId(patientId:string):Observable<Appointment[]>{
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'id':patientId,
    });
    return this.http.get<Appointment[]>(this.baseApiUrl+'/Appointment/getappointmentsbypatientid',{headers:header})
  }
}
