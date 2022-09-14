import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ItemComponent} from "./item/item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularScrinkast';

  constructor(
    private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.viewContainerRef.createComponent(ItemComponent)
    }, 3000)
  }
}
