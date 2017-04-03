import { CompteurService } from './../shared/compteur.service';
import { PremierService } from './../shared/premier.service';
import { AppComponent } from './../app.component';
import { User } from './../shared/user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],

})
export class FormulaireComponent implements OnInit {
  newUser: User;
  password2: string;
  /**
   * On peut injecter des instances de classes à l'intérieur de nos classes
   * angular en spécifiant dans le constructeur une propriété du type à injecter.
   * Pour que l'injection fonctionne, il faut que la classe ou un de ses
   * parents (plus ou moins lointain) définisse un provider du type en question.
   * @param premierService
   */

  constructor(private premierService:PremierService, 
              private CompteurService:CompteurService) {
    this.newUser = new User();
  }

  ngOnInit() {
    this.premierService.methode();
  }

  inscription():void{
    console.log(this.newUser);
    console.log('password est: ' + this.password2);
    this.CompteurService.incrementer();
  }
}
