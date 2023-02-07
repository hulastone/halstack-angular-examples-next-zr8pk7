import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaWithLengthConstraintComponent } from './textarea-with-length-constraint.component';

describe('TextareaWithLengthConstraintComponent', () => {
  let component: TextareaWithLengthConstraintComponent;
  let fixture: ComponentFixture<TextareaWithLengthConstraintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaWithLengthConstraintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaWithLengthConstraintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
