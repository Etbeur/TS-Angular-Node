import { PetitChien } from './../entite/petit-chien';
import { IDaoPetitChien } from './idao-petit-chien';
import { Schema, Document} from 'mongoose';
import * as mongoose from 'mongoose';

/**
 * Mongoose propose de remplacer le système de Promise qu'il utilise(il en
 * implémentait un à la base mais celui-ci va etre deprecated).
 * TypeScript n'autorise pas l'assignation d'une valeur à une variable venant
 * d'un node_module, il faut donc le "piéger" en castant mongoose en any
 * pour cibler ensuite a Promise.
 */
(<any>mongoose).Promise = Promise;
// On crée une connexion mongodb pointant sur notre bdd
const connexion = mongoose.createConnection('mongodb://localhost:25025/test')
// On crée un schema qui dira à mongoose à quoi doit ressembler un petit chien
const schemaDog:Schema = new Schema({
    id: Number,
    nom: String,
    race: String,
    birthDate: Date
}).pre('save', function(next){
    this.id = new Date().getTime() + (Math.round(Math.random()*100));
    next();
});
/**
 * mongodb gère ses id dans une propriété appelé _id, elle est de type string(ou
 * parfois de type ObjecId), notre modèle de donnée initial ne prévoyant pas d'_id,
 * on crée notre propre gestion d'id unique dans un .pre(qui déclanchera ce code
 * avant l'évènement donné en argument, ici save) et on assigne à la propriété id le
 * timestamp de l'éjout suivi d'un math random arrondi, histoire d'avoir un truc unique.
 */

interface LittleDogModel extends PetitChien, Document {}

/**
 * Le model servira à la fois à faire les requête vers la base avec mongoose pour
 * un schema particulier, et il permettra également de créer de nouvelles instances
 * de Document s'accordant avec ce schema.
 * Ici, on crée un model pour notre PetitChien que nous typons LittleDogModel( à la fois
 * un PetitChien et un Document)
 * Ici, en paramètre, PetitChien représente une table créée par mongoose, appelé collections en mongoDB
 */
const modelDog = connexion.model<LittleDogModel>('PetitChien', schemaDog);



export class DaoPetitChienMd implements IDaoPetitChien {
    getAllDogs(): Promise<PetitChien[]> {
        return modelDog.find().then((dogs) => dogs);
    }
    getDogById(id: number): Promise<PetitChien> {
        return modelDog.findOne({id: id}).then((dogs) => dogs);
    }
    addDog(chien: PetitChien): Promise<boolean> {
        return  new modelDog(chien).save().then((chien) => {
            if(chien._id){
                return true;
            }
            return false;
        });
    }
    removeDog(chien: PetitChien): Promise<boolean> {
        return modelDog.findOneAndRemove({id: chien.id}).then(() => true);
    }
    updateDog(chien: PetitChien): Promise<boolean> {
        return modelDog.findOneAndUpdate({id: chien.id}, chien).then(() => true);
    }

}