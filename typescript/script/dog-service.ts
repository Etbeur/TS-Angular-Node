import { AjaxManager } from './ajax-manager';
import { PetitChien } from './petit-chien';
/**
 * La classe DogService sera un genre de DAO côté client. C'est dans
 * celle ci que seront regroupés tous les appels ajax vers le webService
 * contenant les chiens.
 * Ainsi, si jamais le web service change son implémentation, il suffira
 * de venir modifier le DogService pour s'accorder à la nouvelle api et
 * le reste de l'application restera inchangée.
 */

export class DogService {
    // Le service va utiliser AjaxManager pour faire ses appels
    private ajax:AjaxManager;
    // On stock l'url du webService en propriété pour n'avoir à le changer
    // qu'une fois si celui ci change d'adresse.
    private wsUrl:string;

    constructor() {
        this.ajax = new AjaxManager();
        this.wsUrl = 'http://localhost:1313/dog-router';
    }

    /**
     * La méthode obtenir chien va faire un appel ajax pour récupérer une liste de chiens.
     * Etant donné que l'appel ajax est asynchrone, à partir du moment ou l'on 
     * commence à travailler avec de l'asynchrone, on reste "coincé" avec lui jusqu'au
     * bout de la chaine.
     * C'est pour ça que la méthode renvoie une Promise de chien plutôt que les chiens
     * directement. Ceux ci arrivant de manière asynchrone, il n'est pas possible de
     * pouvoir les return directement dans cette méthode.
     */
    getDogs():Promise<PetitChien[]> {
        // On va donc renvoyer la Promise emise par l'AjaxManager.
        // Celle ci est typée Promise<string>, il va donc falloir la transformer
        // pour qu'elle soit typée Promise<PetitChien[]>
        return this.ajax.send({
            url: this.wsUrl
            // En faisant un return à l'intérieur d'un then, on modifie la valeur
            // qui sera disponible à l'intérieur du then suivant. Ici, on prend la
            // réponse en string de notre AjaxManager et on la parse en liste de chien
        }).then( (reponse) => JSON.parse(reponse) )
    }

    /*
    On peut voir ça comme ça :
    ------------------------Promise---------------------------------->
    AjaxManager             DogService          ajax.ts
    ---création-------------then(string)--------then(PetitChien[])---> 

    On traine la même Promise du début à la fin, mais la valeur de son 
    then est modifié au fur et à mesure qu'on traverse les composants
    */  

    getDogById(): Promise<PetitChien[]> {
        return this.ajax.send({
            url: this.wsUrl
        }).then( (reponse) => JSON.parse(reponse) )
    }      
}