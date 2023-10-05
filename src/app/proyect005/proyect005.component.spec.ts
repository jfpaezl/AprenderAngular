import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect005Component } from './proyect005.component';

describe('Proyect005Component', () => {
  let component: Proyect005Component;
  let fixture: ComponentFixture<Proyect005Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect005Component]
    });
    fixture = TestBed.createComponent(Proyect005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
