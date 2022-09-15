import {delay, Observable, of, switchMap} from "rxjs";
import {PreloadingStrategy, Route} from "@angular/router";

export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    // return fn()
    if (route.data && route.data['noreload']) {
      return of(false);
    }

    return of(true).pipe(delay(3000), switchMap(value => value ? fn() : of(null)));
  };
}
