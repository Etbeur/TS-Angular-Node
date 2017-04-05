import { FirstAjaxService } from './../shared/first-ajax.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css'],
  providers: [FirstAjaxService],
})
export class AjaxComponent implements OnInit {

  constructor(private firstAjaxService:FirstAjaxService) {}

  ngOnInit() {
  }

  getAjaxMessage(){
    this.firstAjaxService.getMessage();
  }



}
