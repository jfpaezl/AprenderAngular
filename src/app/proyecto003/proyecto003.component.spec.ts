import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto003Component } from './proyecto003.component';

describe('Proyecto003Component', () => {
  let component: Proyecto003Component;
  let fixture: ComponentFixture<Proyecto003Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyecto003Component]
    });
    fixture = TestBed.createComponent(Proyecto003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
