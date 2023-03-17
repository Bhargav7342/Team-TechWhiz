import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Homepage/home/home.component';
import { LandComponent } from './LandingPage/land/land.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { AdminComponent } from './Adminpage/admin/admin.component';
import { DoctorComponent } from './DoctorPage/doctor/doctor.component';
import { NurseComponent } from './Nursepage/nurse/nurse.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AcceptRejectappointmentComponent } from './DoctorPage/accept-rejectappointment/accept-rejectappointment.component';
import { AddDiagnosisComponent } from './DoctorPage/add-diagnosis/add-diagnosis.component';
import {MatInputModule} from '@angular/material/input';
import { PrescriptionComponent } from './DoctorPage/add-prescription/prescription.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { PatientLoginComponent } from './Patient/patient-login/patient-login.component';
import { PatientSignupComponent } from './Patient/patient-signup/patient-signup.component';
import { FormsModule }   from '@angular/forms';
import { PatientDashboardComponent } from './Patient/patient-dashboard/patient-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandComponent,
    AdminComponent,
    DoctorComponent,
    NurseComponent,
    AcceptRejectappointmentComponent,
    AddDiagnosisComponent,
    PrescriptionComponent,
    PatientLoginComponent,
    PatientSignupComponent,
    PatientDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-2fhrarubg5yn6myf.us.auth0.com',
      clientId: 'ssnUSkOdAhEaR8BfKnaxyV3TewUN89WU',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
