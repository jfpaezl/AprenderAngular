import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect004Component } from './proyect004.component';

describe('Proyect004Component', () => {
  let component: Proyect004Component;
  let fixture: ComponentFixture<Proyect004Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect004Component]
    });
    fixture = TestBed.createComponent(Proyect004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
