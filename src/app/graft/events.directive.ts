import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvents]'
})
export class EventsDirective {

  @HostListener('change', ['$event']) changeElement(event){
    console.log(event);
  }

  constructor() { }

}
