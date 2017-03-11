/*
Chaque fichier typescript est considéré comme étant un module à part
Les modules fonctionneent en circuit fermé et ne connaissent que les 
éléments qu'on leur dit explicitement.
De la même manière, ils n'exposeront que les éléments qui auront été 
exportés avec le mot clef exportés
*/

// variableModule sera disponible depuis l'exterieur
export const variableModule = "valeur";

// autreVariable ne le sera pas
const autreVariable = "autreValeur";