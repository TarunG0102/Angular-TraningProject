import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDemo]',
  standalone: true
})
export class DemoDirective {

  constructor(private el:ElementRef) {
  el.nativeElement.style.background = "red"
  el.nativeElement.style.color = "White"
  
   }

}
