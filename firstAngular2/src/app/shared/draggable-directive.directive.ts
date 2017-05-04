import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[siDraggable]'
})
export class DraggableDirectiveDirective {
  
  constructor(private element:ElementRef) { }
  // private cliked = false;
  
  // @HostListener('mousedown')
  // startClick() {
  //   this.clicked = true;
  // }

  // @HostListener('mouseup')
  // EndClick() {
  //   this.clicked = false;
  // }

  @HostListener('mousemove', ['$event'])
  move(event) {
    // if(clicked = true)
    if(event.buttons === 1) {
      let domElement:HTMLElement = this.element.nativeElement;
      domElement.style.position = 'absolute';
      domElement.style.left = event.clientX - ( domElement.offsetWidth / 2 ) + 'px';
      domElement.style.top = event.clientY - ( domElement.offsetHeight) + 'px';
    }
  }
  
}
