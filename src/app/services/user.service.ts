import { Injectable } from '@angular/core';
import { AppConfig } from './../app-config';

import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {

  constructor(
    private _http: Http,
    private _config: AppConfig
  ) {}

  getAll(){
    var r = this._http.get(this._config.API_ENDPOINT + "/users", this.headers() )
      .toPromise()
      .then(res => res.json());
    console.log(r);
    return r;
  }

  getById(){

  }

  create(){

  }

  update(){

  }

  delete(){

  }

  private headers(): Headers{
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let access_token = localStorage.getItem("access_token");
    headers.append("Authorization", "Bearer ${access_token}");
    return headers;
  }

}
