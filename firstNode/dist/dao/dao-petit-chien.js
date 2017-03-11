"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implémentation de l'interface IDaoPetitChien sans base de données,
 * les chiens seront simplement stockés en mémoire du serveur (et donc
 *  remis à zéro à chaque restart de celui ci).
 */
class DaoPetitChien {
    getAllDogs() {
        // équivalent self::bdd en php
        // La variable bdd étant static, on ne peut pas y accéder avec this
        // qui fait référence à l'instance (et la variable static n'est pas
        // stockée dans l'instance, mais dans la classe)
        return new Promise((resolve, reject) => resolve(DaoPetitChien.bdd));
    }
    getDogById(id) {
        /**
         * La méthode .find() des array renvoie le premier élément trouvé qui
         * correspond à la contrainte donnée en argument sous forme de fonction
         * renvoyant un booléen.
         */
        return new Promise((resolve, reject) => {
            resolve(DaoPetitChien.bdd.find((dog) => dog.id === id));
        });
        /*
        La fat arrow function du dessus est quivalente à :

        return DaoPetitChien.bdd.find(function(dog){
             return dog.id === id;
         });
         */
    }
    addDog(dog) {
        return new Promise((resolve, reject) => {
            // On assigne l'id actuel de la bdd au chien à ajouter
            dog.id = DaoPetitChien.currentId;
            // On l'ajoute à la "bdd"
            DaoPetitChien.bdd.push(dog);
            // On incrémente l'id actuel de la bdd
            DaoPetitChien.currentId++;
            resolve(true);
        });
    }
    removeDog(dog) {
        return new Promise((resolve, reject) => {
            /**
             * Le filter() va fonctionner un peu comme le find, il va itérer sur les items
             * de notre tableau et retirer chaque élément correspondant à une contrainte
             * fournie en fonction renvoyant du boolean (il ne modifie pas le tableau
             * d'origine mais renvoie un nouveau tableau filtré)
             */
            DaoPetitChien.bdd =
                DaoPetitChien.bdd.filter((itemDog) => itemDog.id !== dog.id);
            (resolve(true));
        });
    }
    updateDog(dog) {
        return new Promise((resolve, reject) => {
            /**
             * findIndex() fonctionne comme le find mais renvoie l'index plutôt que
             * la valeur du premier item du tableau passant la contrainte (si aucun
             * item ne passe la contrainte, il renverra -1).
             */
            let index = DaoPetitChien.bdd.findIndex((itemDog) => itemDog.id === dog.id);
            if (index !== -1) {
                DaoPetitChien.bdd[index] = dog;
                resolve(true);
            }
            resolve(false);
        });
    }
}
/**
 * On rend nos propriété currentId et bdd static car on va vouloir
 * qu'elles soient partagées par toutes les instances de DaoPetitChien.
 * Si on les laissait non static, une nouvelle "bdd" serait créée et
 * utilisée pour chaque instance de DaoPetitChien.
 */
DaoPetitChien.bdd = [
    { id: 1, nom: 'fido', race: 'corgi', birthDate: new Date() },
    { id: 2, nom: 'bob', race: 'rotweiller', birthDate: new Date() },
    { id: 3, nom: 'alex', race: 'jack russel', birthDate: new Date() },
    { id: 4, nom: 'rex', race: 'caniche', birthDate: new Date() }
];
DaoPetitChien.currentId = 5;
exports.DaoPetitChien = DaoPetitChien;
//# sourceMappingURL=dao-petit-chien.js.map