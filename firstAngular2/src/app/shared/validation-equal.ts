import { ValidatorFn, AbstractControl } from '@angular/forms';


export function equal(item:any):ValidatorFn {
   return (control: AbstractControl):{[key:string]:any} => {
       if (item === control.value){
           return null
       }
       return {'equal':control.value};
   }
}

/*
    Vous pouvez commencer par gérer uniquement les produits, mais en leur laissant
    quand même une propriété catégorie optionnelle.
*/
interface Produit {
    categorie:Categorie;
}

/**
 * Le fait de gérer les catégories de produits vous demandera probablement
 * de rajouter dans le DaoProduit une méthode getProduitByCategorie
 * 
 * Si en plus vous gérez les sous catégories il faudra probablement rajouter
 * une méthode à votre DaoCategorie : getCategoriesByCategorie
 */
interface Categorie {
    produits?: Produit[];
    sousCategories: Categorie[];
}