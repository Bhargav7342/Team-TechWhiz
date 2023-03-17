import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AdminComponent } from './Adminpage/admin/admin.component';
import { AcceptRejectappointmentComponent } from './DoctorPage/accept-rejectappointment/accept-rejectappointment.component';
import { DoctorComponent } from './DoctorPage/doctor/doctor.component';
import { PrescriptionComponent } from './DoctorPage/add-prescription/prescription.component';
import { HomeComponent } from './Homepage/home/home.component';
import { LandComponent } from './LandingPage/land/land.component';
import { NurseComponent } from './Nursepage/nurse/nurse.component';
import { PatientLoginComponent } from './Patient/patient-login/patient-login.component';
import { PatientSignupComponent } from './Patient/patient-signup/patient-signup.component';
import { PatientDashboardComponent } from './Patient/patient-dashboard/patient-dashboard.component';

const routes: Routes = [
  {
    path:"landed",
    component:LandComponent
  },
  {
    path:"admin",
    component:AdminComponent,canActivate:[AuthGuard]
  },
  {
    path:"doctor",
    component:DoctorComponent,canActivate:[AuthGuard]
  },
  {
    path:'nurse',
    component:NurseComponent,canActivate:[AuthGuard]
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"doctorland",
    component:AcceptRejectappointmentComponent
  },
  {
    path:"presc",
    component:PrescriptionComponent
  },
  {
    path:"plogin",
    component:PatientLoginComponent
  },
  {
    path:"psignup",
    component:PatientSignupComponent
  },
  {
    path:"padash",
    component:PatientDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
