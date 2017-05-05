import { Directive, ElementRef, HostListener, Input, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appPiece]'
})
export class PieceDirective {

  @Input('appPiece')
  private emplacement:HTMLElement;
  @Output()
  private onDrop:EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(private element: ElementRef) { }
  private clicked:boolean = false;

  @HostListener('mousedown')
  clickEnCours() {

    this.clicked = true;
  }
  @HostListener('mouseup')
  finDuClick() {
    this.clicked = false;
    let posPiece = this.getPos(this.element.nativeElement);
    let posEmplacement = this.getPos(this.emplacement);
    
    this.onDrop.emit(this.plusOuMoins(posPiece[0], posEmplacement[0]) 
    && this.plusOuMoins(posPiece[1], posEmplacement[1]));
  }
  @HostListener('mousemove', ['$event'])
  deplacement(event) {
    if (this.clicked) {
      let domElement: HTMLElement = this.element.nativeElement;
      domElement.style.position = 'absolute';
      domElement.style.left = event.clientX - (domElement.offsetWidth / 2) + 'px';
      domElement.style.top = event.clientY - (domElement.offsetHeight / 2) + 'px';
    }
  }

  private getPos(element:HTMLElement): Number[] {
    return [
      element.offsetTop,
      element.offsetLeft
    ];
  }

  private plusOuMoins(pos1, pos2):boolean {
    return (pos1 <= pos2 + 10 && pos1 >= pos2 - 10);
  }
}
