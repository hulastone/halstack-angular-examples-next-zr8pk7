import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaWithPatternConstraintComponent } from './textarea-with-pattern-constraint.component';

describe('TextareaWithPatternConstraintComponent', () => {
  let component: TextareaWithPatternConstraintComponent;
  let fixture: ComponentFixture<TextareaWithPatternConstraintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaWithPatternConstraintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaWithPatternConstraintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
