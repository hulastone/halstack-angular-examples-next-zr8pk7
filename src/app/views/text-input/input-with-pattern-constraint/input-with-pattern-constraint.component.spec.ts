import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithPatternConstraintComponent } from './input-with-pattern-constraint.component';

describe('InputWithPatternConstraintComponent', () => {
  let component: InputWithPatternConstraintComponent;
  let fixture: ComponentFixture<InputWithPatternConstraintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithPatternConstraintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithPatternConstraintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
