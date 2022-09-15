import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularScrinkast';

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(value => console.log(value));
  }
}
