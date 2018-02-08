import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user';

@Injectable()
export class DataService {
  private source = new BehaviorSubject<User>(null);

  current = this.source.asObservable();

  constructor() { }

  emitData(data: User) {
    this.source.next(data);
  }
}
