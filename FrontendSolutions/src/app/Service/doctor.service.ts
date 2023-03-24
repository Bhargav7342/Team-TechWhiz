import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Appointment, Doctor } from '../Models/database.models';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseApiUrl:string=environment.baseApiUrlavail;
  baseApiurl2:string=environment.baseApiUrl1

  constructor(private http:HttpClient) { }

  getDoctorDetails(email:string):Observable<Doctor>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'Email':email
    });

    return this.http.get<Doctor>(this.baseApiUrl+'/Doctor/GetDoctorsByEmail',{headers:header})
  }


  getAllAppointmetsBydoctorandstatus(Id:string ,status:string):Observable<Appointment[]>
  {
    let header=new HttpHeaders({
      'Content-Type':'application/json',
      'resposneType':'json',
      'id':Id,
      'status':status
    });
    

    return this.http.get<Appointment[]>(this.baseApiurl2+'/Appointment/getappointmentsbyDoctoridAndStatus',{headers:header});
  }


}
