"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const first_router_1 = require("./routers/first-router");
const cors = require("cors");
const dog_router_1 = require("./routers/dog-router");
/**
 * La classe ExpressServer va se charger d'initialiser une nouvelle application
 * express et d'y inscrire des routers.
 */
class ExpressServer {
    constructor() {
        this.express = express();
        this.middleware();
        this.router();
    }
    /**
     * La méthode middleware va assigner les middlewares utilisés par notre serveur,
     * ici juste le body-parser.
     * (Le body-parser sert, comme son nom l'indique, à parser le body des requêtes http,
     * on lui indique ici de nous les parser en json)
     */
    middleware() {
        /**
         * On utilise le module npm cors afin d'autoriser les CORS ou Cross Origin Request Sharing,
         * c'est une mesure de sécurité qui bloquera par défaut toutes les requêtes ajax vers ce
         * serveur. Avec cors(), on paramètre notre serveur pour qu'il accepte toutes les requêtes
         * de tous les domaines de tous types. (il est possible de configurer les CORS de manière
         * plus pointues, limité à un domaine, limité à un type de requête http, limité à un type de contenu)
         */
        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        /*
         On a dit à notre bodyParser de gérer les requêtes envoyant des données en application/json
         ou en form-urlencoded.
         On pourrait également lui dire de gérer d'autres types de contenu, comme par exemple
         le text/plain (du bête texte) si jamais on avait de tels besoins. En règle générale, on
         se contentera ceci dit de l'application/json et de l'urlencoded
        */
        // this.express.use(bodyParser.text());
    }
    /**
     * La méthode router va se charger d'inscrire les différents router sur notre
     * serveur express, c'est elle qui définira les url vers les routers.
     */
    router() {
        this.express.use('/first-router', new first_router_1.FirstRouter().router);
        this.express.use('/dog-router', new dog_router_1.DogRouter().router);
    }
    /**
     * La méthode run permet de lancer le serveur qui commencera à écouter le port fournit
     * @param port le port http sur lequel notre serveur sera lancé
     */
    run(port) {
        this.express.listen(port);
    }
}
exports.ExpressServer = ExpressServer;
//# sourceMappingURL=server.js.map