import { Http } from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyChange'
})
export class CurrencyChangePipe implements PipeTransform {
    
    constructor(private http:Http) {};

  transform(value: any, ...args: any[]): any {
    /** On commence par assigner des paramètres par défaut à notre pipe si jamais aucun
    * n'a été fournit (alternativement, on peut faire planter le pipe dans ce cas là,
    * selon ce qui semble le plus logique)
    */
    if(typeof(args[0]) === 'undefined'){
      args[0] = 'EUR';
    }
    if(typeof(args[1]) === 'undefined'){
      args[1] = 'USD';
    }

    /**
     * On renvoie un observable d'un webservice de taux de change en lui fournissant la devise
     * d'entrée dans l'url et en récupérant le taux de la devise de sortie qu'on multiplie à la 
     * valeur sur lequel le pipe est appliqué
     */
     return this.http.get('http://api.fixer.io/latest?base=' + args[0])
            .map( (reponse) => reponse.json())
            .map( (data) => value * data.rates[args[1]] )

  }
}
