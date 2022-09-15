import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {formControl} from "@angular/core/schematics/migrations/typed-forms/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularScrinkast';
  nameControl: FormControl;

  ngOnInit() {
    // this.nameControl = new FormControl<any>('John', [Validators.required, Validators.minLength(2)]);
    this.nameControl = new FormControl<any>('John', [Validators.required, this.myValidator]);
    this.nameControl.valueChanges.subscribe(value => console.log(value))
    this.nameControl.statusChanges.subscribe(status => {
      console.log(status);
      console.log(this.nameControl.errors)
    })
  }

  myValidator(formControl: FormControl) {
    if (formControl.value.length < 3) {
      return{myValidator: {message: 'Should be something'}};
    }

    return null;
  }
}

