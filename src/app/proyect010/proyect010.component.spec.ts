import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect010Component } from './proyect010.component';

describe('Proyect010Component', () => {
  let component: Proyect010Component;
  let fixture: ComponentFixture<Proyect010Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect010Component]
    });
    fixture = TestBed.createComponent(Proyect010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
