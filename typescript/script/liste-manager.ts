

export class ListeManager {
    /*
    On peut déclarer des propriétés de classe privées ou public directement
    dans notre classe.
     */
    
    // private data:string[];
    // private ul:HTMLUListElement;
    
    /*
    La méthode constrcutor sera celle qui sera lancée à chaque instanciation de la 
    classe en question. On peut lui fournir en arguments des variables d'initialisations
    mais on peut également faire comme ci-dessous un constructeur qui déclare en même
    temps des propriétés en utilisant le mot clef private ou public, à ce moment
    là, plus besoin de redéclarer la propriété au dessus
    */

    constructor(private ul:HTMLUListElement, private data:string[], private document:Document) {
        this.ul = ul;
        this.data = data;
        // this.ul = ul;
        // this.data = data;
        this.renderListe();
    }

    ajouter(newItem:string) {
        this.data.push(newItem);
        this.renderListe();
    }

    private renderListe() {
        this.ul.innerHTML = '';
        /*
        Le for....of itère sur les valeurs d'un array
        le for....in itère sur les clefs d'un objet. Les arrays étant
        des objets, on peut se servir du for....in pour itérer sur les index
        d'un array. Le for....in n'est ceci dit pas vraiment fait pour ça
        à la base, il faudra faire attention à certains cas où il provoquera
        des bugs (notamment sur les pseudo-arrays)
        */
        for(let item in this.data) {
            let li:HTMLElement = this.document.createElement('li');
            let btn:HTMLButtonElement = this.document.createElement('button');
            li.textContent = this.data[item];
            btn.textContent = 'supprimer';
            /*
            On utilise ici la syntaxe fat arrow function: () => ...
            C'est une nouveauté ECMAScript2015 qui permet de créer des fonctions anonymes ne changeant pas la valeur du this.
            En effet, le this en javascript change la valeur à chaque foisque l'on entre dans une nouvelle fonction, 
            rendant l'assignation de fonction au sein d'une classe assez fastidieuse, le fat arrow function est làpour palier ce problème.
            Les parenthèse sont là pour assigner des noms de variables à la fonction anonyme, le code à exécuter se trouvera après
            la flèche. Si le code fait plus d'un ligne, il faudra utiliser la syntaxe () => {
                                                                                            du code;
                                                                                            du code;
                                                                                        }
            */
            btn.onclick = (event) => this.supprimer(parseInt(item));
            li.appendChild(btn);
            
            
            this.ul.appendChild(li);
        }
    }

    supprimer(index:number) {
        this.data.splice(index, 1);
        this.renderListe();
    }
}