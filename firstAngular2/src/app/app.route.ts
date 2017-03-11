import { PageNotFoundComponent } from './page-not-found.component';
import { FirstComponent } from './first.component';
import { Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';


/**
 * On définit ici les différentes routes de notre application.
 * Chaque route va avoir une path(une url) et un component qui lui
 * sera associé.
 * On peut lancerlancer des redirection en utilisant redirectTo avec le
 * path de redirection comme argument.
 * On utilise le path '**' pour assigner un comportement à un path qui ne matcherait
 * aucun de ceux que nous avons définit (typiquement pour un 404).
 */
export const routes:Routes = [
    {path: 'first', component:FirstComponent},
    {path: '', redirectTo: 'first', pathMatch: 'full'},
    {path: 'formulaire', component: FormulaireComponent},
    {path: '**', component:PageNotFoundComponent}

];