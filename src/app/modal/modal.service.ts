import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ModalService {

  constructor() {
  }

  private modals: any[] = [];

  add(modal: any): void {
    this.modals.push(modal);
  }

  open(id: string, data: Object): void {
    const modal = this.modals.find(m => m.id === id);
    modal.open(data);
  }

  close(id: string): Observable<object> {
    const modal = this.modals.find(m => m.id === id);
    return modal.close();
  }

  remove(id: string) {
    const index = this.modals.indexOf(this.modals.find(m => m.id === id));
    this.modals.splice(index, 1);
  }
}
