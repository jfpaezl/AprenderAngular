import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect008Component } from './proyect008.component';

describe('Proyect008Component', () => {
  let component: Proyect008Component;
  let fixture: ComponentFixture<Proyect008Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect008Component]
    });
    fixture = TestBed.createComponent(Proyect008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
