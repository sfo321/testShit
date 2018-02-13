import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ModalService } from '../../modal.service';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-modal1',
  moduleId: module.id,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class SimpleModalComponent implements OnInit, OnDestroy {

  @Input() id: string;
  private el: HTMLElement;
  message: string;

  constructor(private service: ModalService, private element: ElementRef, private renderer: Renderer2) {
    this.el = element.nativeElement;
  }

  ngOnInit() {
    this.el.classList.add('hidden');
    this.service.add(this);
  }

  open(data: any): void {
    this.message = data.message;
    this.renderer.addClass(document.body, 'opened');
    this.el.classList.remove('hidden');
  }

  close() {
    this.el.classList.add('hidden');
    this.renderer.addClass(document.body, 'closed');
    return of({
      closed: true,
    });
  }

  ngOnDestroy() {
    this.service.remove(this.id);
    this.el.remove();
  }
}
