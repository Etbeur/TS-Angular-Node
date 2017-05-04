import { User } from './../shared/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {
  liste:User[] = [];
  infos:User;

  constructor() { }

  ngOnInit() {
    for(let x = 1; x < 5; x++){
      let user = new User();
      user._id = x + '';
      user.email = 'email' + x + '@gmail.com';
      user.name = 'name' + x;
      user.firstName = 'firstName' + x;
      this.liste.push(user);
    }
  }

  deleteCurrentUser(user:User){
    this.liste = this.liste.filter((item) => item._id !== user._id);
    this.infos = null;
  }

  saveModifiedUser(user:User){
    this.infos.name = user.name;
    this.infos.firstName = user.firstName;
    this.infos.email = user.email;
  }
}
