"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dao_petit_chien_1 = require("./dao/dao-petit-chien");
class DogRouter {
    constructor() {
        this.router = express_1.Router();
        this.dao = new dao_petit_chien_1.DaoPetitChien;
        this.routeInit();
    }
    getDogs(request, response) {
        this.dao.getAllDogs()
            .then((dogs) => response.json(dogs))
            .catch((error) => response.json(error));
    }
    getDogById(request, response) {
        let id = request.params.getId;
        this.dao.getDogById(id)
            .then((id) => response.json(id))
            .catch((error) => response.json(error));
    }
    routeInit() {
        this.router.get('/', this.getDogs.bind(this));
        this.router.get('/:getId', this.getDogById.bind(this));
    }
}
exports.DogRouter = DogRouter;
//# sourceMappingURL=dog-router.js.map