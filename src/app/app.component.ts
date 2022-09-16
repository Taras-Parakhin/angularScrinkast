import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularScrinkast';
  nameControl: FormControl;
  form: true;
  fullNameControl: FormGroup;

  ngOnInit() {
    // this.nameControl = new FormControl<any>('John', [Validators.required, Validators.minLength(2)]);
    // this.nameControl = new FormControl<any>('John', [Validators.required, this.myValidator], [this.myAsyncValidator]);
    // this.nameControl.valueChanges.subscribe(value => console.log(value))
    // this.nameControl.statusChanges.subscribe(status => {
    //   console.log(status);
    //   console.log(this.nameControl.errors)
    // });

    this.fullNameControl = new FormGroup({
      firsName: new FormControl(),
      lastName: new FormControl()
    });

    // this.fullNameControl.valueChanges.subscribe(value => console.log(value))
  }

  myValidator(formControl: FormControl) {
    if (formControl.value.length < 3) {
      return{myValidator: {message: 'Should be something'}};
    }

    return null;
  }

  myAsyncValidator(formControl: FormControl): Observable<any | null> {
    if (formControl.value < 3) {
      return of({myValidator: {message: 'Should be something'}});
    }
    return of(null);
  }
}

