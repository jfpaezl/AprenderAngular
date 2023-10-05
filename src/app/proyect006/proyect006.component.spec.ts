import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyect006Component } from './proyect006.component';

describe('Proyect006Component', () => {
  let component: Proyect006Component;
  let fixture: ComponentFixture<Proyect006Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Proyect006Component]
    });
    fixture = TestBed.createComponent(Proyect006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
