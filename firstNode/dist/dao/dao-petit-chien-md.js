"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
/**
 * Mongoose propose de remplacer le système de Promise qu'il utilise(il en
 * implémentait un à la base mais celui-ci va etre deprecated).
 * TypeScript n'autorise pas l'assignation d'une valeur à une variable venant
 * d'un node_module, il faut donc le "piéger" en castant mongoose en any
 * pour cibler ensuite a Promise.
 */
mongoose.Promise = Promise;
// On crée une connexion mongodb pointant sur notre bdd
const connexion = mongoose.createConnection('mongodb://localhost:25025/test');
// On crée un schema qui dira à mongoose à quoi doit ressembler un petit chien
const schemaDog = new mongoose_1.Schema({
    id: Number,
    nom: String,
    race: String,
    birthDate: Date
}).pre('save', function (next) {
    this.id = new Date().getTime() + (Math.round(Math.random() * 100));
    next();
});
/**
 * Le model servira à la fois à faire les requête vers la base avec mongoose pour
 * un schema particulier, et il permettra également de créer de nouvelles instances
 * de Document s'accordant avec ce schema.
 * Ici, on crée un model pour notre PetitChien que nous typons LittleDogModel( à la fois
 * un PetitChien et un Document)
 * Ici, en paramètre, PetitChien représente une table créée par mongoose, appelé collections en mongoDB
 */
const modelDog = connexion.model('PetitChien', schemaDog);
class DaoPetitChienMd {
    getAllDogs() {
        return modelDog.find().then((dogs) => dogs);
    }
    getDogById(id) {
        return modelDog.findOne({ id: id }).then((dogs) => dogs);
    }
    addDog(chien) {
        return new modelDog(chien).save().then((chien) => {
            if (chien._id) {
                return true;
            }
            return false;
        });
    }
    removeDog(chien) {
        return modelDog.findOneAndRemove({ id: chien.id }).then(() => true);
    }
    updateDog(chien) {
        return modelDog.findOneAndUpdate({ id: chien.id }, chien).then(() => true);
    }
}
exports.DaoPetitChienMd = DaoPetitChienMd;
//# sourceMappingURL=dao-petit-chien-md.js.map