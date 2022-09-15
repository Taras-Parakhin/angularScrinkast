import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToUser(id: number) {
    this.router.navigate(['user', id], {skipLocationChange: true, relativeTo: this.activatedRoute})
      .then(value => console.log(value));
    // this.router.navigateByUrl('user/' + id, {skipLocationChange: true});
  }
}
