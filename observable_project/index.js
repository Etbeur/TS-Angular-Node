import Rx from 'rxjs/Rx';
import {observableAsync} from './fake-async';

// take permet de choisir le nombre de données que l'on veut recevoir
// const souscription = observableAsync.take(3).subscribe( (data) => console.log(data) ); 

const souscription = observableAsync.subscribe( (data) => console.log(data) );
// unsubscribe permet de se 'désinscrire' d'un observable.
// setTimeOut( () => souscription.unsubscribe(), 2000 ); 



/**
 * Un Observable est un flux de données que l'on pourra manipuler avec les opérateurs fournit
 * par rxjs. N'importe quoi peut-etre transformé en Observable, le concept de la programmation 
 * réactive étant de ne manipuler que des flux: flux de données, flux d'event etc.
 */


// On crée un tableau de données numériques
const tabs = [1,2,3,4];
// On utilise la méthode from pour créer un Observable à partir de ce tableau
const obsTabs = Rx.Observable.from(tabs);
// On "parcours" les données en souscrivant à l'observable créé
// On peut également en deuxième argument indiquer une action à faire en cas d'erreur dans le flux
//  et en troisème argument indiquer une action à effectuer une fois arrivé au bout du flux
obsTabs.subscribe( (data) => console.log(data),
    (error) => console.log('error'),
    () => console.log('Fin de notre Observable') );


/**
 * On peut créer un Observable de zéro en utilisant la méthode create, on fournira alors
 * avec la méthode .next() les données à envoyer lors de la souscription. On terminera
 * notre Observable par un .complete() 
 */
const monObservable = Rx.Observable.create( (observer) => {
    observer.next('a');
    observer.next('b');
    observer.next('c');
    observer.cmplete();
});
// On souscrit à l'observable créé comme à n'importe quel autre.
monObservable.subscribe( (data) => console.log('data'),
    (error) => console.log('error'),
    () =>console.log ('completed') );


/**
 * Chaque observable possède une batterie de méthode qui modifiera le flux ou la manière dont 
 * le flux se comporte. Ces méthodes sont communes à tous les observbles (ce qui permet de traiter
 * toutes les données de la même manière).
 * On peut par exemple concatenner deux observable ensemble avec la méthode concat (le flux de l'un ne
 * commencera que lorsque le flux de l'autre sera terminé).
 * On peut également modifier les données de nos observables avec la méthode .map() qui prend en 
argument la fonction de modification à appliquer.
 */
const obsConcat = obsTabs.concat(monObservable)
    .map( (data) => "The data is : " + data );

obsConcat.subscribe( (data) => console.log(data),
    () => console.log('error'),
    () => console.log('concat complete') );