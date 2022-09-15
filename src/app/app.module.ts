import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from "./auth.guard";
import {UserResolveService} from "./user-resolve.service";
import { LoginComponent } from './login/login.component';
import {CustomPreloadingStrategy} from "./custom.preload.strategy";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin',
    data: {
      noreload: false
    },
    loadChildren: ()=>import('./admin/admin.module').then(value => value.AdminModule)},
  {path: 'login', component: LoginComponent, outlet: 'popup'},
  {path: 'users',
    canActivate: [AuthGuard],
    resolve: {
      user: UserResolveService
    },
    data: {
    title: 'Users',
      anotherParam: 'something else'
    },
    component: UsersComponent},
  {path: 'user/:id', component: UserComponent, children: [
      {path: 'settings', component: SettingComponent},
      {path: 'profile', component: ProfileComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    SettingComponent,
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategy})
  ],
  providers: [CustomPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
