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

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        FirstComponent,
        PageNotFoundComponent,
        FormulaireComponent,
        ReactiveFormulaireComponent,
    ],
    bootstrap: [
        AppComponent
    ],
})

export class AppModule {

}