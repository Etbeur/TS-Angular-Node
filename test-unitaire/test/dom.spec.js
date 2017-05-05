describe('modifyText', function(){
    var id = 'monIdTest'
/*
On utilisera la méthode beforeEach pour mettre en place l'environnement.
*/
    beforeEach(function(){
        var el = document.createElement('p');
        el.textContent = 'default';
        el.id = id;
        document.body.appendChild(el);
    });
/*
afterEach servira quand à lui à demonter l'environnement de test et les
éventuels ajouts fait par les scenario de test.
*/
    afterEach(function(){
        document.getElementById(id).remove();
    })
/*
Ces deux méthodes seront lancées avant et après chaque scénario,
le but étant que chaque scénario se déroule dans un environnement
complètement contrôlé et similaire.
*/
    it('should work normally', function() {
        var id = 'monIdTest';
        expect(document.getElementById(id).textContent).toBe('default');
        modifyText(id);
        expect(document.getElementById(id).textContent).toBe('bim');
    });

});