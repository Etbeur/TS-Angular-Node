var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ListeManager = (function () {
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
    function ListeManager(ul, data, document) {
        this.ul = ul;
        this.data = data;
        this.document = document;
        this.ul = ul;
        this.data = data;
        // this.ul = ul;
        // this.data = data;
        this.renderListe();
    }
    ListeManager.prototype.ajouter = function (newItem) {
        this.data.push(newItem);
        this.renderListe();
    };
    ListeManager.prototype.renderListe = function () {
        var _this = this;
        this.ul.innerHTML = '';
        var _loop_1 = function (item) {
            var li = this_1.document.createElement('li');
            var btn = this_1.document.createElement('button');
            li.textContent = this_1.data[item];
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
            btn.onclick = function (event) { return _this.supprimer(parseInt(item)); };
            li.appendChild(btn);
            this_1.ul.appendChild(li);
        };
        var this_1 = this;
        /*
        Le for....of itère sur les valeurs d'un array
        le for....in itère sur les clefs d'un objet. Les arrays étant
        des objets, on peut se servir du for....in pour itérer sur les index
        d'un array. Le for....in n'est ceci dit pas vraiment fait pour ça
        à la base, il faudra faire attention à certains cas où il provoquera
        des bugs (notamment sur les pseudo-arrays)
        */
        for (var item in this.data) {
            _loop_1(item);
        }
    };
    ListeManager.prototype.supprimer = function (index) {
        this.data.splice(index, 1);
        this.renderListe();
    };
    return ListeManager;
}());
exports.ListeManager = ListeManager;


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var liste_manager_1 = __webpack_require__(2);
// const listeElements: string[] = ["ga", "zo", "bu"];
var listeManager;
function ready() {
    var paragraphe = document.getElementById('para');
    paragraphe.textContent = 'autre chose';
    // renderListe();
    // On instancie notre ListeManager en lui fournissant en argument le ul
    // les données d'initialisation
    listeManager = new liste_manager_1.ListeManager(document.querySelector('#liste'), ["ga", "zo", "bu"], document);
}
exports.ready = ready;
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
function ajouter() {
    var prenom = document.querySelector('#prenom');
    // A présent la fonction ajouter se contente de rajouter un item à notre
    // listeElements et laisse renderListe faire la génération. (séparation des
    // responsabilités etc)
    // listeElements.push(prenom.value);
    // renderListe()
    // Pour l'ajout, on fait appel à la méthode ajouter du ListeManager
    // en lui passant la valeur de l'input comme argument.
    listeManager.ajouter(prenom.value);
}
exports.ajouter = ajouter;


/***/ })
/******/ ]);