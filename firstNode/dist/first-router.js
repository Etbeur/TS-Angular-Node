"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
/**
 * Les classes Router vont définir une nouvelle instance de Router puis inscrire les différentes
 * routes sur celui ci en implémentant les méthodes qui devront être éxécutées sur chaque route.
 */
class FirstRouter {
    constructor() {
        this.router = express_1.Router();
        this.liste = ["ga", "zo", "bu"];
        this.routeInit();
    }
    /**
     * La méthode test sera appelé lorsqu'on accèdera à la route /test en Get sur ce routeur
     */
    test(request, response) {
        response.json({
            message: "yep yep it's all right"
        });
    }
    lister(request, response) {
        response.json(this.liste);
    }
    getItem(request, response) {
        // On peut récupérer les index de route via la request et son objet params.
        // Celui ci contiendra tous les arguments rendus disponibles par la définition
        // de la route (en string)
        let parameter = request.params.index;
        response.json({
            item: this.liste[parameter]
        });
    }
    /**
     * Méthode d'ajout d'un mot à la liste via une requête GET
     */
    addItem(request, response) {
        let parameter = request.params.word;
        this.liste.push(parameter);
        response.json({
            add: "(" + parameter + ")" + ' a été ajouté avec succès',
            liste: this.liste
        });
    }
    /**
     * Méthode d'ajout d'un item à la liste via une requête POST
     */
    addItemPost(request, response) {
        // Les paramètres d'une requête POST sont contenu dans le body de la requête.
        // Celui ci est converti en objet javascript par le body-parser que nous
        // avons inscrit en middleware de notre serveur.
        let parameter1 = request.body.test;
        this.liste.push(parameter1);
        response.json({
            msg: "votre mot a bien été ajouté à la liste",
            liste: this.liste
        });
    }
    /**
     * La méthode routeInit se charge d'inscrire les différentes méthodes de
     * la classe sur leur route correspondante
     */
    routeInit() {
        this.router.get('/test', this.test);
        this.router.get('/lister', this.lister.bind(this));
        // On définit ici une route avec un argument, les arguments doivent
        // être précédés de ':'
        // le nom suivant les : sera le nom de la variable rendue disponibles
        // dans la request.params
        this.router.get('/item/:index', this.getItem.bind(this));
        this.router.get('/add/:word', this.addItem.bind(this));
        this.router.post('/ajout', this.addItemPost.bind(this));
    }
}
exports.FirstRouter = FirstRouter;
//# sourceMappingURL=first-router.js.map