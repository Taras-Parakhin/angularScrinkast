import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public x: number = 5;
  public user: any = {
    name: 'John'
  };
  public users: any = [
    {name: 'John'},
    {name: 'Bob'},
    {name: 'Nick'}
  ]
  public myColor = 'red';
  public myWidth = 100;
  public isShown: boolean;
  public selectedUser: any = {};

  constructor() {
  }

  random() {
    return Math.random()
  }

  ngOnInit(): void {

  }

  changColor(input: any) {
    this.myColor = input;
  }
}
