/*
testons
On utilisera let et const plutot que var de javascript
(spécification EcmaScript2015)

*/

//let cré une variable qui est block scopée
let variableLet = 'plop';
//const crée une variable qu'on ne peut pas redéfinir
let variableConst = 'bim';

if(variableLet === 'plop'){
    //anOtherVariable n'est accessible que dans le if du fait du let
    let anOtherVariable = true;
}

for(var x = 0; x < 10; x++){
    setTimeout(function(){
        console.log(x);
    }, 1000);
    //affichera 9 9 9 9 9 9 9 9 9 9
}

for(let x = 0; x < 12; x++){
    setTimeout(function(){
        console.log(x);
    }, 1000);
    //affichera 0 1 2 3 4 5 6 7 8 9
}

let text:string = 'bam';
//text = true
//déclaration d'un tableau numérique, 2 manières
//let tableau:Array<number>
let tableau:number[] = [1,2,3,4,5]

const tabConst:string[] = ['ga', 'go', 'gu'];
//On peut ajouter des valeurs à notre tableau dans la constante
tabConst.push['nouvelle valeur'];
//Par contre, on ne peut pas redéfinir le tableau
// tabConst ['autre', 'tableau']

// On peut itérer sur un tableau en utilisant le for...of
for(let item of tableau){
    console.log(item);
}

interface FirstInterface{
    attributText:string;
    attributNum:number;
}

let FirstInstance: FirstInterface = {
    attributText: 'une valeur',
    attributNum: 13
};

let NoInstance = {
    attributText: 'une valeur',
    attributNum: 13,
    attributAutre: true
}

maFonction(NoInstance);

function maFonction(argument:FirstInterface):string{
    return 'blabla';
}