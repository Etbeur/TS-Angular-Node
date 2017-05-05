function myFunction(texte) {
    if(typeof(texte) === 'undefined'){
        throw new Error();
    }
    return texte + " bim";
}
