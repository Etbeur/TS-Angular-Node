import { FirstAjaxService } from './../shared/first-ajax.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css'],
  providers: [FirstAjaxService],
})
export class AjaxComponent implements OnInit {
  message:string;
  liste:string[];
  newItem:string;

  constructor(private firstAjaxService:FirstAjaxService) {}

  ngOnInit() {
  }

  getAjaxMessage(){
    this.firstAjaxService.getMessage()
    .subscribe((reponse) => this.message = reponse.message);
  }

  getAjaxListe() {
    this.firstAjaxService.getListe()
    .subscribe((data) => this.liste = data);
  }

  addToAjaxListe(newItem){
    this.firstAjaxService.addToListe(this.newItem)
    .subscribe((data) => {
      this.getAjaxListe();
      alert(data)
    });
  }

}
