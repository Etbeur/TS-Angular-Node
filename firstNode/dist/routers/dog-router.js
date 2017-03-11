"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dao_petit_chien_md_1 = require("../dao/dao-petit-chien-md");
/**
 * La classe DogRouter est construite sur le même modèle que le FirstRouteur,
 * elle rend accessible les différentes méthodes du dao en REST
 * (Note: dans un vrai projet, il pourrait être préférable de rajouter une
 * couche supplémentaire entre le routeur et le dao, une couche Business.
 * En effet, exposer direcetement le dao n'est pas une très bonne pratique).
 */
class DogRouter {
    constructor() {
        this.router = express_1.Router();
        this.dao = new dao_petit_chien_md_1.DaoPetitChienMd();
        this.routeInit();
    }
    /**
     * La méthode getDogs sera appelé lorsque la route / sera appelé
     * Méthode GET
     */
    getDogs(request, response) {
        this.dao.getAllDogs()
            .then((dogs) => response.status(200).json(dogs))
            .catch((error) => response.status(500).json(error));
    }
    /**
     * La méthode getDogById sera appelé lorsque la route /:id sera appelé
     * Méthode GET
     */
    getDogById(request, response) {
        let id = parseInt(request.params.getId);
        this.dao.getDogById(id)
            .then((id) => {
            // Si le find ne trouve rien, on renvoie un status 204 No Content
            if (id === undefined) {
                response.status(204).json();
            }
            else {
                response.status(200).json(id);
            }
        }).catch((error) => response.status(500).json(error));
    }
    /**
     * La méthode addDog sera appelé lorsque la route /:add sera appelé
     * Méthode POST
     */
    // private addNewDog(request:Request, response:Response) {
    //     let newNom = request.body.nom
    //     let newRace = request.body.race
    //     this.dao.addDog({
    //         id: null,
    //         nom: newNom,
    //         race: newRace,
    //         birthDate: new Date()
    //     })
    //         .then( (animal) => response.status(200).json(animal) )
    //         .catch( (error) => response.status(500).json(error) )
    // }
    addNewDog(request, response) {
        let newDog = request.body;
        this.dao.addDog(newDog)
            .then((success) => response.status(200).json({
            message: 'Ajout réussi',
            id: newDog.id
        }))
            .catch((error) => response.status(500).json(error));
    }
    /**
     * La méthode deleteDog sera appelé lorsque la route/del sera appelé
     * Méthode POST
     */
    // private deleteDog(request:Request, response:Response) {
    //     let delId = parseInt(request.body.id)
    //     this.dao.removeDog({
    //         id: delId,
    //         nom: null,
    //         race: null,
    //         birthDate: new Date()
    //     })
    //         .then( (animal) => response.status(200).json(animal) )
    //         .catch( (error) => response.status(500).json(error) )
    // }
    delDog(request, response) {
        let toDel = request.body;
        toDel.id = parseInt(request.body.id);
        this.dao.removeDog(toDel)
            .then((success) => response.status(200).json({ message: "dog has been delete" }))
            .catch((error) => response.status(500).json(error));
    }
    // private updateADog(request:Request, response:Response) {
    //     let modifyName = request.body.nom
    //     let modifyRace = request.body.race
    //     let modifyId = parseInt(request.body.id)
    //     this.dao.updateDog({
    //         id: modifyId,
    //         nom: modifyName,
    //         race: modifyRace,
    //         birthDate: new Date()
    //     })
    //         .then( (animal) => response.status(200).json(animal) )
    //         .catch( (error) => response.status(500).json(error) )
    // }
    updateADog(request, response) {
        let toUpdate = request.body;
        toUpdate.id = parseInt(request.body.id);
        this.dao.updateDog(toUpdate)
            .then((success) => {
            if (success) {
                response.status(200).json({ message: "dog update" });
            }
            else {
                response.status(404).json({ message: "inexistant dog" });
            }
        }).catch((error) => response.status(500).json(error));
    }
    routeInit() {
        this.router.get('/', this.getDogs.bind(this));
        this.router.get('/:getId', this.getDogById.bind(this));
        this.router.post('/add', this.addNewDog.bind(this));
        this.router.post('/del', this.delDog.bind(this));
        this.router.post('/update', this.updateADog.bind(this));
    }
}
exports.DogRouter = DogRouter;
//# sourceMappingURL=dog-router.js.map