import { ComponentFixture, TestBed } from '@angular/core/testing';

/* The line `import { DadoComponent } from './dado.component';` is importing the `DadoComponent` class
from the file `dado.component.ts`. This allows the `DadoComponent` to be used in the test file. */
import { DadoComponent } from './dado.component';

describe('DadoComponent', () => {
  let component: DadoComponent;
  let fixture: ComponentFixture<DadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadoComponent]
    });
    fixture = TestBed.createComponent(DadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
