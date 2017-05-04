import { ChangeTailleDirective } from './shared/changeTaille.directive';
import { PageNotFoundComponent } from './page-not-found.component';
import { routes } from './app.route';
import { FirstComponent } from './first.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormulaireComponent } from './reactive-formulaire/reactive-formulaire.component';
import {HttpModule} from '@angular/http';
import {AjaxComponent} from './ajax/ajax.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { DetailUserComponent } from './liste-users/detail-user/detail-user.component';
import { DirectivesAttributComponent } from './directives-attribut/directives-attribut.component';
import { SurbrillanceDirective } from './shared/surbrillance.directive';
import { DraggableDirectiveDirective } from './shared/draggable-directive.directive';
import { PipesComponent } from './pipes/pipes.component';
import { ExemplePipe } from "./shared/exemple.pipe";
import { CurrencyChangePipe } from './shared/currency-change.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        FirstComponent,
        PageNotFoundComponent,
        FormulaireComponent,
        ReactiveFormulaireComponent,
        AjaxComponent,
        ListeUsersComponent,
        DetailUserComponent,
        DirectivesAttributComponent,
        SurbrillanceDirective,
        ChangeTailleDirective,
        DraggableDirectiveDirective,
        PipesComponent,
        ExemplePipe,
        CurrencyChangePipe
    ],
    bootstrap: [
        AppComponent
    ],
})

export class AppModule {

}