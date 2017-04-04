import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";


/**
 * Les ReactivForms définiront la logique des formulaires et leur validation
 * à l'ntérieur de la classe Component plutôt que dans le template de celui-ci
 * d'où l'appélation de model driven forms à l'inverse des template driven.
 */
@Component({
  selector: 'app-reactive-formulaire',
  templateUrl: './reactive-formulaire.component.html',
  styleUrls: ['./reactive-formulaire.component.css']
})
export class ReactiveFormulaireComponent implements OnInit {
  // Les FormControl seront les objets assignés aux inputs/ select / radio...
  // name:FormControl;

  // Les FormGroup permettront de regrouper plusieurs FormControl pour ne pas
  // avoir à les gérer individuellement.
  formulaire:FormGroup;

/**
 * Le FormBuilder est un service natif de ReacttiveFormsModule qui nous fournira des
 * méthodes factory permettant de créer un peu plus rapidement des FormControl/Group/Array
 */
  constructor(private fb:FormBuilder) {
    // this.name = new FormControl();
    
    // Grace au formBuilder, nous n'avons plus besoin de cette partie
    // this.formulaire = new FormGroup({
    //   name: new FormControl()
    // });
   }

  ngOnInit() {
    /**
     * On utilise le formBuilder pour créer notre form group et ses form controls, on peut
     * assigner directement un Validator à un form control en le forunissant en deuxième
     * argument d'un array comme valeur du form control.
     */
    this.formulaire = this.fb.group({
      name: [
        '', 
        [Validators.required, Validators.maxLength(24)]
      ],
      firstName: '',
      email: [
        '',
        Validators.email
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],
      passwordConfirmation: [
        '',
        Validators.required
      ]
    },
    {
      validator: this.passwordConfirmation
    });
  }
/**
 * Les fonctions de validation ont le profil suivant:
 * Elles ont en argument un AbstractControl (FormGroup, FormControl, FormArray)
 * et renvoie un objet ayant des clefs de types string (qui seront les clefs des
 * erreurs de validations accessible sur l'AbstractControl auquel on assigne cette
 * validation). La fonction renvoie null si la validation passe
 */
  private passwordConfirmation(group:FormGroup):{[key:string]:any} {
    if(group.get('password').value === group.get('passwordConfirmation').value){
      return null;
    }
    return{notSamePassword:true};
  }

  inscription(){
    // console.log(this.name.value)
    // for(let clef in this.formulaire.controls){
      // console.log('clef')
    // }
    console.log(this.formulaire.value);
  }

}
