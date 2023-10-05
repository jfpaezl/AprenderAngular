import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect015Component } from './proyect015.component';

describe('Proyect015Component', () => {
  let component: Proyect015Component;
  let fixture: ComponentFixture<Proyect015Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect015Component]
    });
    fixture = TestBed.createComponent(Proyect015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
