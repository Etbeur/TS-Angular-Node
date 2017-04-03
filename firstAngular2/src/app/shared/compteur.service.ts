import { PremierService } from './premier.service';
import { Injectable } from "@angular/core";

/**
 * Si on veut pouvoir profiter de l'injection de dépendance à l'intérieur de nos services,
 * il faudra annoter ceux-ci d'un @Injectable(), cela aura comme conséquence d'inclure la classe
 * en question dans la boucle de l'injecteur angular qui pourra donc résoudre les dépendances du
 * service comme il le ferait avec un @Component.
 * Il est conseillé de rajouter @Injectable() sur tous ses services dans une logique de régularité.
 */


@Injectable()
export class CompteurService {
    private compteur: number = 0;

    constructor(private premierService:PremierService) {}

    incrementer() {
        this.compteur++;
        this.premierService.methode();
        console.log('Le compteur est à ' + this.compteur);
    }

}