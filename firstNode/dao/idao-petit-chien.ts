import { PetitChien } from '../entite/petit-chien';



export interface IDaoPetitChien {
    getAllDogs():Promise<PetitChien[]>;
    getDogById(id:number):Promise<PetitChien>;
    addDog(chien:PetitChien):Promise<boolean>;
    removeDog(chien:PetitChien):Promise<boolean>;
    updateDog(chien:PetitChien):Promise<boolean>;
}




// 2) Créer un nouveau fichier dao/idao-petit-chien.ts
// Dedans vous définirez une interface IDaoPetitChien qui possédera les méthodes suivantes :

//     - getAllChiens() qui renvoie une liste de PetitChien
//     - getChienById(id) qui attend un argument de type number et renvoie un unique PetitChien
//     -addChien(chien) qui attend un argument de type PetitChien et renvoie du booléen
//     -removeChien(chien) qui attend un argument de type PetitChien et renvoie du booléen
//     -updateChien(chien) qui attend un argument de type PetitChien et renvoie du booléen