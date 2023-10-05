import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect007Component } from './proyect007.component';

describe('Proyect007Component', () => {
  let component: Proyect007Component;
  let fixture: ComponentFixture<Proyect007Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect007Component]
    });
    fixture = TestBed.createComponent(Proyect007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
