import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(
    private authenticationService: AuthenticationService,
    private _router: Router
  ) { }

  onSubmit(email, password) {
    event.preventDefault();
    this.authenticationService.login(email, password)
      .then(response => {
        if(response) {
          // if we got an access token, then go to profile page
          this._router.navigate(['dashboard']);
        }
      });
  }

}
