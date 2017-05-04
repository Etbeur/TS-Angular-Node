import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { environment } from './../../../environments/environment';
import { User } from './../../shared/user';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit, OnChanges {
  /**
   * On met un @Input() sur les propriétés de notre component qui pourront être
   * initialiser par un composant parent dans le template via une directive
   * d'assignation (ici [userInfos]= "infos" dans le liste-users-component.html).
   */
  @Input()
  userInfos:User;

  /**
   * On met un @Output() sur les propriétés de type EventEmitter<T> de notre component.
   * Cela rendra accessible sur le template de ce component un event du nom de la propriété
   * (ou de l'alias si on utilise @Output('nomEvent')).
   * Cet event sera déclenché par la propriété EventEmitter selon les conditions
   * de son déclenchement(ici, on déclenche onDelete lorsqu'on click sur le bouton supprimer
   * du template de detail-utilisateur)
   */
  @Output()
  onDelete:EventEmitter<User> = new EventEmitter<User>();
  @Output()
  onSave:EventEmitter<User> = new EventEmitter<User>();

  formulaireModif:FormGroup

  constructor(private fb:FormBuilder) { }

  /**
   * On crée un formulaire en model driven pour éviter que les modifications sur l'utilisateur
   * ne se répercute directement sur l'objet du component parent.
   */
  ngOnInit() {
    this.formulaireModif = this.fb.group({
      name: this.userInfos.name,
      firstName: this.userInfos.firstName,
      email: this.userInfos.email
    })
  }

/**
 * Le component DetailUser n'étant pas détruit à chaque changement de valeur de sont input, il
 * faut indiquer que dans le cas où son input est modifié, on relance le ngOnInit afin de 
 * remettre le formulaire à zéro.
 */
  ngOnChanges(changes: SimpleChanges): void {
      this.ngOnInit();
    }

  /**
   * La méthode deleteUser de ce component ne fait qu'émettre l'event onDelete du component en
   * lui fournissant en argument l'utilisateur lié à ce component(user).
   * En effet, dans ce genre de cas, il ne serait pas très judicieux de laisser un sous-Component
   * influer sur la valeur des variables du component parent.
   */
  clickDelete(){
    this.onDelete.emit(this.userInfos);
  }

  /**
   * Le submitModif aura pour butd'émettre l'event onSave en lui fournissant en argument un new User
   * construit à partir des informations du formulaire et de certaines informations (non modifiables)
   * du this.user
   */
    clickSave(){
    let modifiedUser = new User();
    modifiedUser._id = this.userInfos._id;
    modifiedUser.password = this.formulaireModif.value.password;
    modifiedUser.name = this.formulaireModif.value.name;
    modifiedUser.firstName = this.formulaireModif.value.firstName;
    modifiedUser.email = this.formulaireModif.value.email;

    this.onSave.emit(modifiedUser);
  }

}
