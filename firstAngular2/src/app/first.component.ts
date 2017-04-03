import { Component } from '@angular/core';
import { CompteurService } from './shared/compteur.service';


/**
 * Le "scope" des injections dépend de l'endroit où l'on déclare le provider.
 * Si je déclare un provider dans le component racine (AppComponent), la même
 * instance est partagée par tous les composants, mais si je le déclare dans 
 * un component spécifique, l'instance du service dera propre à ce Component et 
 * à ses enfants.
 * Ici, je redéfinis le provider CompteurService dans FirstComponent, ce qui fait
 * qu'au lieu d'utiliser l'instance "globale" déclarée dans le AppComponent, FirstComponent
 * crée une instance de CompteurService qui lui est propre à chaque fois qu'on accède à ce
 * Component.
 */
@Component({
    selector: 'app-first',
    templateUrl: "./first.component.html",
    providers: [CompteurService]

})

export class FirstComponent {
    myObject:any;
    firstVariable:string;
    tableau:string[];

    constructor(private CompteurService:CompteurService) {
        this.firstVariable = "effacez ce texte"
        this.myObject = {
            attribut1 : " ajoutez votre",
            attribut2 : " texte"
        };
        this.tableau = ['bla', 'bli','blo','bla']
    }

    add():void {
        this.tableau.push(this.firstVariable)
        this.CompteurService.incrementer();
    }

    del(index): void {
        this.tableau.splice(index, 1)
    }

} 