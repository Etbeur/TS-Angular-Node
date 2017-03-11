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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Interface qui définit les paramètres que l'on pourra fournir à notre
 * méthode send() de l'AjaxManager.
 */

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Classe qui encapsule les appels ajax pour les rendre plus rapide à utiliser.
 */
var AjaxManager = (function () {
    function AjaxManager() {
    }
    /**
     * Méthode qui déclenche une nouvelle requête ajax
     * @param options Paramètres de type AjaxOptions
     */
    AjaxManager.prototype.send = function (options) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var defaultOptions = {
                url: '',
                typeRequete: 'GET',
                async: true,
                parameters: ''
            };
            // Assignation des paramètres utilisateur aux paramètres par défaut
            that.assignOptions(options, defaultOptions);
            // Création d'une instance d'XMLHttpRequest, le moteur de l'ajax
            var ajax = new XMLHttpRequest();
            // l'event onreadystatechange qui nous permettra de savoir quand
            // la réponse de notre requête sera disponible.
            ajax.onreadystatechange = function () {
                // readyState 4 : réponse disponible
                if (ajax.readyState === 4) {
                    // status 200 : HTTP OK
                    if (ajax.status === 200) {
                        // traitement de la réponse
                        resolve(ajax.responseText);
                    }
                    else {
                        reject(ajax.statusText);
                    }
                }
            };
            // On ouvre la requête en lui fournissant le type http, l'url de la
            // ressources et si c'est une requête asynchrone ou non
            ajax.open(defaultOptions.typeRequete, defaultOptions.url, defaultOptions.async);
            // On envoie la requête avec d'éventuels paramètres
            ajax.send(defaultOptions.parameters);
        });
    };
    ;
    /**
     * Méthode qui assigne des paramètres sources à des paramètres target
     */
    AjaxManager.prototype.assignOptions = function (source, target) {
        for (var clef in source) {
            target[clef] = source[clef];
        }
    };
    return AjaxManager;
}());
exports.AjaxManager = AjaxManager;


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dog_service_1 = __webpack_require__(7);
var dog = new dog_service_1.DogService();
dog.getDogById()
    .then(function (chien) { return console.log(chien); })
    .catch(function (error) { return console.log(error); });


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ajax_manager_1 = __webpack_require__(1);
/**
 * La classe DogService sera un genre de DAO côté client. C'est dans
 * celle ci que seront regroupés tous les appels ajax vers le webService
 * contenant les chiens.
 * Ainsi, si jamais le web service change son implémentation, il suffira
 * de venir modifier le DogService pour s'accorder à la nouvelle api et
 * le reste de l'application restera inchangée.
 */
var DogService = (function () {
    function DogService() {
        this.ajax = new ajax_manager_1.AjaxManager();
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
    DogService.prototype.getDogs = function () {
        // On va donc renvoyer la Promise emise par l'AjaxManager.
        // Celle ci est typée Promise<string>, il va donc falloir la transformer
        // pour qu'elle soit typée Promise<PetitChien[]>
        return this.ajax.send({
            url: this.wsUrl
            // En faisant un return à l'intérieur d'un then, on modifie la valeur
            // qui sera disponible à l'intérieur du then suivant. Ici, on prend la
            // réponse en string de notre AjaxManager et on la parse en liste de chien
        }).then(function (reponse) { return JSON.parse(reponse); });
    };
    /*
    On peut voir ça comme ça :
    ------------------------Promise---------------------------------->
    AjaxManager             DogService          ajax.ts
    ---création-------------then(string)--------then(PetitChien[])--->

    On traine la même Promise du début à la fin, mais la valeur de son
    then est modifié au fur et à mesure qu'on traverse les composants
    */
    DogService.prototype.getDogById = function () {
        return this.ajax.send({
            url: this.wsUrl
        }).then(function (reponse) { return JSON.parse(reponse); });
    };
    return DogService;
}());
exports.DogService = DogService;


/***/ })
/******/ ]);