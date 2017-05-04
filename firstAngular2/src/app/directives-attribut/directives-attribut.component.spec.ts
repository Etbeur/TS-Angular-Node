import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAttributComponent } from './directives-attribut.component';

describe('DirectivesAttributComponent', () => {
  let component: DirectivesAttributComponent;
  let fixture: ComponentFixture<DirectivesAttributComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesAttributComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesAttributComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
