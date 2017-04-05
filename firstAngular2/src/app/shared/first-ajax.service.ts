import { ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class FirstAjaxService {
// On crée une propriété qui contiendra l'url du webservice sur lequel ce service va faire
// ses requêtes (alternativement on peut créer une variable par url de requête)
private wsUrl:string = 'http://192.168.1.92:9090/premier-router';

/**
 * Pour faire de l'ajax avec angular, on injecte le service Http faisant partie de notre
 * module HttpModule (celui-ci aura été importé dans le ngModule de notre application)
 */
    constructor(private http:Http) { }

  getMessage() {
    /**
     * Le service Http possède une méthode pour chaque type de requête HTTP possible
     * (GET, POST, PUT, DELETE...)
     * Le service Http de angular n'utilise ni les Promise ni les Callback mais un "nouveau"
     * concept de programmation appelé Observable pour gérer l'asynchrone. 
     * C'est une composante de ce qu'on appelle la Programmation Réactive dont la librairie Rx
     * est une des implémentations les plus utilisées (ngular utilise en l'occurence rxjs)
     * Pour simplifier, on pourrait dire qu'au lieu d'utiliser .then() et .catch() sur le retour
     * de notre requête, on utilisera .subscribe() qui attendra 3 arguments (mais surtout deux
     * en fait), une fonction à lancer dans le cas d'une requête réussie, pour manipuler la
     * réponse de celle-ci, une fonction à lancer dans le cas où une erreur survient, et une
     * fonction à lancer une fois que le flux de donnée est terminé(cette troisième fonction
     * n'est pas nécessaire dans le cas d'une requête ajax)
     */
    this.http.get(this.wsUrl + '/test')
    .subscribe((reponse:Response) => {
      console.log(reponse.json());
    },
    (error) => {
      console.log(error);
    })
  }
}