import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

interface IUser {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser>{

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log(route.data)
    return {name: 'Nick'};
  }
}
