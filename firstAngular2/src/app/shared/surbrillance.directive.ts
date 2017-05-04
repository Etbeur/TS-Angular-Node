import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

/**
 * Les directives d'attributs vont nous permettre de créer de ouveaux "attributs angular"
 * (comme ngModel ou ngClass) qui pourrait s'appliquer sur n'importe quel élément html dans
 * les templates.
 * On pourra y manipuler le DOM des éléments pour rajouter par exemple des évènements js.
 */
@Directive({
    selector: '[siSurbrillance]'
})
// Rajouter implements OnInit pour tester le code ngOnInit
export class SurbrillanceDirective{
    
    /**
     * Tout comme les component, on peut passer des valeurs à la directive depuis le template
     * en utilisant le décorateur @Input. Ici o récupère la couleur de surbrillance, on l'obtient
     * via la valeur donnée à l'attribut siSurbrillance (grâce à l'alias, l'argument dans le 
     * @Input(), sans cet argument, il aurait fallu fournir la couleur das un attribut supplémentaire
     * couleur="yellow" par exemples)
     */
    @Input("siSurbrillance")
    private couleur:string;
    /**
     * Les directives d'attributs donnent accès à l'élément DOM sur lequel la directive
     * sera placée via ElementRef
     */
    constructor(private element:ElementRef) { }
    /**
     * On pourra influer sur le DOM de cet element comme on le ferait en js natif
     */
    // ngOnInit():void {
    //     this.element.nativeElement.onmouseenter = function() {
    //         console.log('entré');
    //     };

    //     this.element.nativeElement.addEventListener('mouseleave', function(){
    //         console.log('sortie');
    //     });
    // }

    /**
     * Plutôt qu'ajouter directement les évènements sur le dom de l'élément, Angular propose un décorateur
     * @Hostlistener() qui attend en argument l'event à cibler et qui décorera une méthode qui s'éxecutera
     * lorsque l'event en question sera déclenché
     */
    @HostListener('mouseenter')
    onMouseEnter(){
        this.element.nativeElement.style.backgroundColor = this.couleur;
    }
    
    @HostListener('mouseleave')
    onMouseLeave(){
        this.element.nativeElement.style.backgroundColor = null;
    }
}