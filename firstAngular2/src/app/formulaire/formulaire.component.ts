import { User } from './../shared/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  newUser: User;
  password2: string;

  constructor() {
    this.newUser = new User();
  }

  ngOnInit() {
  }

  inscription():void{
    console.log(this.newUser);
    console.log('password est: ' + this.password2);
  }
}
