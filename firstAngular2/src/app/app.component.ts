import { FirstAjaxService } from './shared/first-ajax.service';
import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { PremierService } from './shared/premier.service';
import { CompteurService } from './shared/compteur.service';

/**
 * On déclare ici les providers des classes qu'on voudra povoir injecter 
 * dans tout le module. A noter que l'injecteur crée un singleton des classes
 * qu'on lui déclare, cela signifie que ça sera la même instance de classe qui
 * sera injceter partout dans l'application (à moins qu'un providers re-déclare
 * la classe en question plus loin dans le module)
 */
@Component({
    selector: 'my-app',
    template:`
    <a routerLink="/first">First Page</a> 
    <a routerLink="/formulaire">Formulaire</a> 
    <a routerLink="/reactive-formulaire">Reactive formulaire</a>
    <a routerLink="/ajax">Ajax</a> 
    <a routerLink="/list">Users list</a> 
    <a routerLink="/directives-attribut">Directives Attribut</a> 
    <a routerLink="/pipe">Pipe</a> 
    <a routerLink="/erreur">404 error</a> 
    <router-outlet></router-outlet>`,
    providers: [PremierService, CompteurService,FirstAjaxService],
    //afficher les 2 attributs dans le template

})

export class AppComponent {

}