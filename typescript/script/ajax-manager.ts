/**
 * Interface qui définit les paramètres que l'on pourra fournir à notre
 * méthode send() de l'AjaxManager.
 */

interface AjaxOptions {
    typeRequete?: string;
    url: string;
    async?: boolean;
    parameters?: any;
    callback?: Function;
}
/**
 * Classe qui encapsule les appels ajax pour les rendre plus rapide à utiliser.
 */
export class AjaxManager {
    /**
     * Méthode qui déclenche une nouvelle requête ajax
     * @param options Paramètres de type AjaxOptions
     */
    send(options:AjaxOptions):Promise<string> {
        let that = this;
        return new Promise(function(resolve, reject){
        
            const defaultOptions:AjaxOptions = {
                url:'',
                typeRequete: 'GET',
                async: true,
                parameters: ''
            };
            // Assignation des paramètres utilisateur aux paramètres par défaut
            that.assignOptions(options, defaultOptions);
            // Création d'une instance d'XMLHttpRequest, le moteur de l'ajax
            const ajax:XMLHttpRequest = new XMLHttpRequest();
            // l'event onreadystatechange qui nous permettra de savoir quand
            // la réponse de notre requête sera disponible.
            ajax.onreadystatechange = function() {
                // readyState 4 : réponse disponible
                if(ajax.readyState === 4) {
                    // status 200 : HTTP OK
                    if(ajax.status === 200) {
                        // traitement de la réponse
                        resolve(ajax.responseText);
                    }else {
                        reject(ajax.statusText);
                    }
                }
            };
            // On ouvre la requête en lui fournissant le type http, l'url de la
            // ressources et si c'est une requête asynchrone ou non
            ajax.open(defaultOptions.typeRequete,
                defaultOptions.url,
                defaultOptions.async);
                // On envoie la requête avec d'éventuels paramètres
            ajax.send(defaultOptions.parameters);
        }
    )};

    /**
     * Méthode qui assigne des paramètres sources à des paramètres target
     */
    private assignOptions(source:AjaxOptions, target:AjaxOptions):void {
        for(let clef in source) {
            target[clef] = source[clef];
        }
    }
}