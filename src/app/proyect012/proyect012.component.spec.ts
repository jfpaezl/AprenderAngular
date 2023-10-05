import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect012Component } from './proyect012.component';

describe('Proyect012Component', () => {
  let component: Proyect012Component;
  let fixture: ComponentFixture<Proyect012Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect012Component]
    });
    fixture = TestBed.createComponent(Proyect012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
