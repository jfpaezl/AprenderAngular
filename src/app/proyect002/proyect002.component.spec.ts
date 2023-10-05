import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect002Component } from './proyect002.component';

describe('Proyect002Component', () => {
  let component: Proyect002Component;
  let fixture: ComponentFixture<Proyect002Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect002Component]
    });
    fixture = TestBed.createComponent(Proyect002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
