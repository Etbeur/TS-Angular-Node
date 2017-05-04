import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ConvertService {
  private urlws:string = "http://api.fixer.io/latest"
  
  constructor(private http:Http) { }

  convert(from:string, to:string, valeur:number):Observable<number> {
    return this.http.get(this.urlws + '?base=' + from)
            .map( (response) => response.json() )
            .map( (data) => valeur * data.rates[to] );
  }

  getDevises(base:string):Observable<string[]> {
    return this.http.get(this.urlws + '?base=' + base)
            .map( (response) => response.json() )
            .map( (data) => data.rates.keys );
  }
}
