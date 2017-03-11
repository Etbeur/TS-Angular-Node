import { Component } from '@angular/core';

@Component({
    selector: 'app-first',
    templateUrl: "./first.component.html"

})

export class FirstComponent {
    myObject:any;
    firstVariable:string;
    tableau:string[];

    constructor() {
        this.firstVariable = "effacez ce texte"
        this.myObject = {
            attribut1 : " ajoutez votre",
            attribut2 : " texte"
        };
        this.tableau = ['bla', 'bli','blo','bla']
    }

    add():void {
        this.tableau.push(this.firstVariable)
    }

    del(index): void {
        this.tableau.splice(index, 1)
    }

} 