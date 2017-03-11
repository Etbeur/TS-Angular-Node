import {ListeManager} from './liste-manager';

// const listeElements: string[] = ["ga", "zo", "bu"];
let listeManager:ListeManager;

export function ready():void {
    const paragraphe:HTMLElement = document.getElementById('para');

    paragraphe.textContent = 'autre chose';
    // renderListe();

    // On instancie notre ListeManager en lui fournissant en argument le ul
    // les données d'initialisation
    listeManager = new ListeManager(<HTMLUListElement>document.querySelector('#liste'), 
                                    ["ga", "zo", "bu"], 
                                    document);

}

/**
 * Fonction de génération des li à partir de la variable listeElements
 */
// function renderListe(): void {
//     // On capture le ul et on le cast en HTMLUListElement
//     const liste: HTMLUListElement = <HTMLUListElement>document.querySelector('#liste');
//     // On remet la liste à 0 pour chaque renderListe
//     liste.innerHTML = '';
//     // On fait une boucle sur notre liste de textes
//     for(let item of listeElements) {
//         // Pour chaque item, on crée un nouvel li
//         let li = document.createElement('li');
//         // auquel on assigne la valeur de item comme textContent
//         li.textContent = item;
//         // puis on l'ajoute a ul
//         liste.appendChild(li);
//     }
// }
/**
 * ---version précédente--Focntion d'ajout d'un élément à la variable listeElements
 * renderListe()---version précédente---
 * 
 * Fonction d'ajout d'un élément via le ListeManager
 */

export function ajouter():void {
    const prenom: HTMLInputElement = <HTMLInputElement>document.querySelector('#prenom')
    // A présent la fonction ajouter se contente de rajouter un item à notre
    // listeElements et laisse renderListe faire la génération. (séparation des
    // responsabilités etc)

    // listeElements.push(prenom.value);
    // renderListe()

    // Pour l'ajout, on fait appel à la méthode ajouter du ListeManager
    // en lui passant la valeur de l'input comme argument.
    listeManager.ajouter(prenom.value);

}