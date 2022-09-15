import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service/user.service";
// import {IUser} from "../interfaces/user.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public users: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getAll()
  }

  deleteUser(name: string) {
    this.userService.delete(name);
    this.users = this.userService.getAll()
  }

  addUser(name: string) {
    this.userService.add(name);
  }
}


