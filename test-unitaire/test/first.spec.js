describe('My first tests', function(){

    it('works good', function() {
        var hello = 'hello';
        expect(hello).toBe('hello');
    });
});
/*
on "décrit" le comportement/méthode/truc qu'on va tester avec un describe
*/
describe('myFunction', function(){
    /*
    puis on définit chaque scénario de test avec un it
    */
    it('should work normally', function(){
        var parameter = 'blablabla';
        var expectedValue = 'blablabla bim';
        /*
        le it() contiendra nos assertions (ce qu'on s'attend à obtenir
        comme résultat de nos tests)
        */
        expect(myFunction(parameter)).toBe(expectedValue);
    });

    it('should work with number', function(){
        var numberTest = 1;
        var expectedNumber = '1 bim';

        expect(myFunction(numberTest)).toBe(expectedNumber);
    });

    it('should throw error', function(){
        expect( () => myFunction().toThrowError(Error) )
    });

    
});