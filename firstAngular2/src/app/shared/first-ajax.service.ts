import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
/**
 * On importe les Observable de la librairies RxJs ainsi que les opérateurs dont 
 * nous allons nous servir ici. On pourait techniquement importer l'intégralité de 
 * la librairie et de ses opérateur en une ligne, mais c'est déconseillé car celle 
 * ci fait une certaine taille et on ne va au final se servir que de quelques 
 * morceaux spécifiques
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Il existe un opérateur rxjs qui transformera un Observable<T> en Promise<T> pour ceux qui 
 * n'arrivent vraiment pas à intégrer le concept et la logique des observable mais qui sont
 * plus habitué.e.s au Promise
 * Ceci dit, la team Angular déconseille l'utilisation de cet opérateur, le framework ayant 
 * été conçu à la base avec les Observable (qui reviennent à d'autres endroits non 
 * liés à l'ajax) et qui permettent plus de choses
 */
// import 'rxjs/add/operator/toPromise'

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

  getMessage():Observable<{message:string}> {
    /**
     * Le service Http possède une méthode pour chaque type de requête HTTP possible
     * (GET, POST, PUT, DELETE...)
     * Le service Http de angular n'utilise ni les Promise ni les Callback mais un "nouveau"
     * concept de programmation appelé Observable pour gérer l'asynchrone. 
     * C'est une composante de ce qu'on appelle la Programmation Réactive dont la librairie Rx
     * est une des implémentations les plus utilisées (Angular utilise en l'occurence rxjs)
     * Pour simplifier, on pourrait dire qu'au lieu d'utiliser .then() et .catch() sur le retour
     * de notre requête, on utilisera .subscribe() qui attendra 3 arguments (mais surtout deux
     * en fait), une fonction à lancer dans le cas d'une requête réussie, pour manipuler la
     * réponse de celle-ci, une fonction à lancer dans le cas où une erreur survient, et une
     * fonction à lancer une fois que le flux de donnée est terminé(cette troisième fonction
     * n'est pas nécessaire dans le cas d'une requête ajax)
     */
    return this.http.get(this.wsUrl + '/test')
            .map((reponse:Response) => reponse.json());
  /**
   * On return ici l'Observable pour le passer au component pour que celui ci puisse décider
   * quoi faire des informations récupérées par la requête, mais en l'occurence on ne veut pas
   * retourner toutes les informations de la requête de notre component pour des raisons de 
   * sécurité, on ne veut lui envoyer que le body qu'on obtient avec la méthode .json() de la 
   * réponse.
   * On utilise donc l'opérateur .map() qui va renvoyer un nouvel observable en modifiant le
   * contenu de celui ci selon la fonction qu'on lui fournit.
   */
  }

  getListe():Observable<string[]> {

    return this.http.get(this.wsUrl + '/lister')
            .map((reponse:Response) => reponse.json());
  }

/**
 * Méthode pour ajouter un élément à la liste via un POST sur l'url
 * http://192.168.1.92:9090/premier-router/ajout
 * Le webservice attend une donnée sous le modèle:
 * {item: 'nouvel item'}
 */
  addToListe(newItem:string) {
    return this.http.post(this.wsUrl + '/ajout', {item: newItem})
            .map((reponse:Response) => reponse.json().message);
  }
}