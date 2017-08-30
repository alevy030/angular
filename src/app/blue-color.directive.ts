import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.style.color = "blue";
  }

  @HostListener('mouseenter') doSomething() {
    console.log('On');
    
  }
   
  @HostListener('mouseleave') doSomethingElse() {
    console.log('off');
    
  }
}
