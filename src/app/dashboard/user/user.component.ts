import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    console.log('onInit');
    this.getUsers();
    console.log(this.getUsers())
  }

  getUsers(){
    return this._userService.getAll();
  }
}
