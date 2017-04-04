import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormulaireComponent } from './reactive-formulaire.component';

describe('ReactiveFormulaireComponent', () => {
  let component: ReactiveFormulaireComponent;
  let fixture: ComponentFixture<ReactiveFormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
