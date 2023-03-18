import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WhizCare';
  email:any;
  name:any;
  name1:string="doctor";
  name2:string="nurse";
  name3:string="admin";
  status:string="login";
  constructor(public auth: AuthService,private router: Router) {}
  ngOnInit(): void {
    this.auth.user$.subscribe((profile)=> {
    console.log(profile);
      this.email=profile?.email;
      this.name=profile?.name;
      console.log(this.email);
      console.log(this.name);
      if(this.email.includes(this.name1))
      {
        console.log("Doctor Page");
        this.router.navigate(['/doctor'],{replaceUrl:true})
      }
      if(this.email.includes(this.name2))
      {
        console.log("Nurse Page");
        this.router.navigate(['/nurse'],{replaceUrl:true})
      }
      if(this.email.includes(this.name3))
      {
        console.log("Admin Page");
        this.router.navigate(['/admin'],{replaceUrl:true})
        
      }
  })
};

  loginWithRedirect(){
    this.auth.loginWithRedirect();
 
    console.log(this.email);
  }

  logout(){
    this.auth.logout();
  }
  new(){
    this.router.navigate(['/landed'])
  }

  loggedIn: boolean = false;

  isLoggedIn() {
    return this.loggedIn;
}

PatientLogin(){
  this.status="logout";
  this.router.navigate(['/plogin']);
}

logoutpatient(){
  this.status="login";
  this.router.navigate(['/']);
}
logoutpatient1(){
  this.status="ploggedin";
  this.router.navigate(['/']);
}
}
