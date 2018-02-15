import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-modal1',
  moduleId: module.id,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class SimpleModalComponent implements OnInit, OnDestroy {

  @Input() id: string;
  private el: any;
  message: string;
  click: any;

  constructor(private service: ModalService, private element: ElementRef, private renderer: Renderer2) {
    this.el = element.nativeElement;

    this.click = ((el) => {
      function getData() {
        return new Promise((res, rej) => {
          el.addEventListener('click', function tr(ev) {
            if (ev.target.classList.contains('close')) {
              el.removeEventListener('click', tr, true);
              res('CLICKED!!');
            }
          });
        });
      }
      return { getData };
    })(this.el);
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

  close(): void {
    this.el.classList.add('hidden');
    return this.renderer.addClass(document.body, 'closed');
  }

  ngOnDestroy() {
    this.service.remove(this.id);
    this.el.remove();
  }
}
