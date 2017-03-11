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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports) {

/*
testons
On utilisera let et const plutot que var de javascript
(spécification EcmaScript2015)

*/
//let cré une variable qui est block scopée
var variableLet = 'plop';
//const crée une variable qu'on ne peut pas redéfinir
var variableConst = 'bim';
if (variableLet === 'plop') {
    //anOtherVariable n'est accessible que dans le if du fait du let
    var anOtherVariable = true;
}
for (var x = 0; x < 10; x++) {
    setTimeout(function () {
        console.log(x);
    }, 1000);
    //affichera 9 9 9 9 9 9 9 9 9 9
}
var _loop_1 = function (x_1) {
    setTimeout(function () {
        console.log(x_1);
    }, 1000);
    //affichera 0 1 2 3 4 5 6 7 8 9
};
for (var x_1 = 0; x_1 < 12; x_1++) {
    _loop_1(x_1);
}
var text = 'bam';
//text = true
//déclaration d'un tableau numérique, 2 manières
//let tableau:Array<number>
var tableau = [1, 2, 3, 4, 5];
var tabConst = ['ga', 'go', 'gu'];
//On peut ajouter des valeurs à notre tableau dans la constante
tabConst.push['nouvelle valeur'];
//Par contre, on ne peut pas redéfinir le tableau
// tabConst ['autre', 'tableau']
// On peut itérer sur un tableau en utilisant le for...of
for (var _i = 0, tableau_1 = tableau; _i < tableau_1.length; _i++) {
    var item = tableau_1[_i];
    console.log(item);
}
var FirstInstance = {
    attributText: 'une valeur',
    attributNum: 13
};
var NoInstance = {
    attributText: 'une valeur',
    attributNum: 13,
    attributAutre: true
};
maFonction(NoInstance);
function maFonction(argument) {
    return 'blabla';
}


/***/ })

/******/ });