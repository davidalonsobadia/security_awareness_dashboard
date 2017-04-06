import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConfig } from '../app-config';
import 'rxjs/add/operator/toPromise';

export class User{
  constructor(
    public email: string,
    public access_toklen: string,
    public refresh_token: string
  ) {}
}

@Injectable()
export class AuthenticationService {  
  private loggedIn = false;

  constructor(
    private _http: Http, 
    private _config: AppConfig) { 
      
    this.loggedIn = !!localStorage.getItem('access_token');
  }

  login(email, password): Promise<boolean>{

    var url = this._config.API_ENDPOINT +  "/oauth/token";
    var client_id = this._config.API_CLIENT_ID;
    var client_secret = this._config.API_CLIENT_SECRET;
    var grantTypePassword = "password"

    let completeUrl = url + "?" + "grant_type=" + grantTypePassword + "&"
      + "client_id=" + client_id + "&"
      + "client_secret=" + client_secret + "&"
      + "username=" + email + "&"
      + "password=" + password;


    return this._http.post(completeUrl, '{}'  )
      .toPromise()
      .then(
        response => {
          localStorage.setItem('access_token', response.json().access_token);
          this.loggedIn = true;
          return true;
        },
        error => {
          console.log(error.text());
          return false;
        }
      );
  }

  logout(){
    localStorage.removeItem('access_token');
    this.loggedIn = false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

}
