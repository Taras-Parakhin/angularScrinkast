import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserService} from "./user-service/user.service";
import { HeaderComponent } from './header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MyInterceptor} from "./my.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
