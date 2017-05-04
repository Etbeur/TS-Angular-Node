import { PipesComponent } from './pipes/pipes.component';
import { DirectivesAttributComponent } from './directives-attribut/directives-attribut.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { AjaxComponent } from './ajax/ajax.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { FirstComponent } from './first.component';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormulaireComponent } from './reactive-formulaire/reactive-formulaire.component';


/**
 * On définit ici les différentes routes de notre application.
 * Chaque route va avoir une path(une url) et un component qui lui
 * sera associé.
 * On peut lancer des redirections en utilisant redirectTo avec le
 * path de redirection comme argument.
 * On utilise le path '**' pour assigner un comportement à un path qui ne matcherait
 * aucun de ceux que nous avons définit (typiquement pour un 404).
 * Bien mettre la wildcard(**) en dernier path, sous peine d'outrepasser les
 * routes définies en dessous de celle ci.
 */
export const routes:Routes = [
    {path: 'first', component:FirstComponent},
    {path: '', redirectTo: 'first', pathMatch: 'full'},
    {path: 'formulaire', component: FormulaireComponent},
    {path: 'reactive-formulaire', component:ReactiveFormulaireComponent},
    {path: 'ajax', component:AjaxComponent},
    {path: 'list', component:ListeUsersComponent},
    {path: 'directives-attribut', component:DirectivesAttributComponent},
    {path: 'pipe', component:PipesComponent},
    {path: '**', component:PageNotFoundComponent}

];