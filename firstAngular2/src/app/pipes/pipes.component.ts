import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ConvertService } from '../shared/convert.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  myDate:Date;
  devises:Observable<string[]>;
  resultat:number;

  constructor(private convert:ConvertService) {
    this.myDate = new Date(2002, 4, 23);
   }

  ngOnInit() {
    this.devises = this.convert.getDevises();
  }

  convertir(from:string, to:string, valeur:number):void {
    this.convert.convert(from, to, valeur)
    .subscribe( (data) => this.resultat = data )
  }
}
