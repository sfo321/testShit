import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoadingStrategy implements PreloadingStrategy {
  loadedModules: string[] = [];
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      this.loadedModules.push(route.path);
      console.log('Preloaded: ' + route.path);
      return load();
    } else {
      return Observable.of(null);
    }
  }
}
