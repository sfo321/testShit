import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import { ModalService } from '../modal.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-modal',
  moduleId: module.id,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  constructor(private service: ModalService, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.insertBefore(document.body, '<app-modal></app-modal>', document.body.firstElementChild);
  }

  openModal(id: string, data: Object): void {
    this.service.open(id, data);
  }

  closeModal(id: string): Observable<object> {
    return this.service.close(id);
  }

  ngOnDestroy() {
  }
}
