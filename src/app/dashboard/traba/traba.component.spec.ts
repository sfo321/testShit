import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabaComponent } from './traba.component';

describe('TrabaComponent', () => {
  let component: TrabaComponent;
  let fixture: ComponentFixture<TrabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
