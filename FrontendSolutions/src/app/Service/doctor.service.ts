import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Doctor } from '../Models/database.models';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseApiUrl:string=environment.baseApiUrlavail;

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

}
