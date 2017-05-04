import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';


@Directive({
    selector: '[siChangeTaille]'
})

export class ChangeTailleDirective {
    private tailleFont:number = 20;
    
    @Input("siChangeTaille")
    private taille:number;
    
    constructor(private element:ElementRef) { }

    @HostListener('click')
    tailleUp() {
        this.tailleFont += this.taille;
        this.element.nativeElement.style.fontSize = this.tailleFont + 'px';
    }
    
    @HostListener('contextmenu', ['$event'])
    tailleDown(event) {
        event.preventDefault();
        this.tailleFont -= this.taille;
        this.element.nativeElement.style.fontSize = this.tailleFont + 'px';
    }
}