import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect014Component } from './proyect014.component';

describe('Proyect014Component', () => {
  let component: Proyect014Component;
  let fixture: ComponentFixture<Proyect014Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect014Component]
    });
    fixture = TestBed.createComponent(Proyect014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
