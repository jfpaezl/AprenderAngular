import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect013Component } from './proyect013.component';

describe('Proyect013Component', () => {
  let component: Proyect013Component;
  let fixture: ComponentFixture<Proyect013Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect013Component]
    });
    fixture = TestBed.createComponent(Proyect013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
