
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {
  private pieces:Boolean[];
  private nbPieces:Number = 9;

  constructor() { }

  ngOnInit() {
    this.pieces = [];
    for(let x = 1; x <= this.nbPieces; x++) {
      this.pieces[x] = false;
    }
  }

  checkVictory(placee, numero) {
    this.pieces[numero] = placee;
    if(this.pieces.filter((valeur) => valeur).length === this.nbPieces) {
      alert('bravo');
    } 
  }

}