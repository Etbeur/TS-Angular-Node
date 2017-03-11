/**
 * On définit une interface pour notre entité qui permettra
 * un typage plus pratique pour le codage du reste de l'application.
 * Les interfaces typescript se compile en rien, elles n'existeront
 * pas dans notre code javascript et sont juste la pour nous
 * aider dans notre code.
 */
export interface PetitChien {
    id: number;
    nom: string;
    race: string;
    birthDate: Date; 

}
