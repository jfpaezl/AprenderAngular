import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect016Component } from './proyect016.component';

describe('Proyect016Component', () => {
  let component: Proyect016Component;
  let fixture: ComponentFixture<Proyect016Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect016Component]
    });
    fixture = TestBed.createComponent(Proyect016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
