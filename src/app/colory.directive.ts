import {Directive, EventEmitter, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  public counter: number = 0;

  @HostBinding('style.color')  // для оновлення властивостей елемента
  myColor: string;

  @HostListener('click', ['$event']) // для обробки подій
  changeColor(event: Event) {
    this.setRandomColor();
    this.counter++;
    console.log(this.counter);
  }

  constructor() {
    this.myColor = 'red';
    setTimeout(() => {
      this.myColor = 'blue'
    }, 2000)
  }

  setRandomColor() {
    this.myColor = '#' + Math.floor(Math.random() * 16715).toString(16)
  }
}
