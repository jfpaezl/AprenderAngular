import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect009Component } from './proyect009.component';

describe('Proyect009Component', () => {
  let component: Proyect009Component;
  let fixture: ComponentFixture<Proyect009Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect009Component]
    });
    fixture = TestBed.createComponent(Proyect009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
