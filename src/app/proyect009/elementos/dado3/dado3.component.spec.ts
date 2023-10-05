import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dado3Component } from './dado3.component';

describe('Dado3Component', () => {
  let component: Dado3Component;
  let fixture: ComponentFixture<Dado3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Dado3Component]
    });
    fixture = TestBed.createComponent(Dado3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
