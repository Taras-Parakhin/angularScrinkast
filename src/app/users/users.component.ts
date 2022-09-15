import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Event, NavigationStart} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(value => console.log(value))
    this.activatedRoute.data.subscribe(value => console.log(value))

    this.activatedRoute.data.subscribe(value => console.log(value['user']))

    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart){
        console.log(event);
      }
    })
  }

  ngOnInit(): void {
  }

}
