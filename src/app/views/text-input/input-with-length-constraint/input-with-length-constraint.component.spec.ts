import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithLengthConstraintComponent } from './input-with-length-constraint.component';

describe('InputWithLengthConstraintComponent', () => {
  let component: InputWithLengthConstraintComponent;
  let fixture: ComponentFixture<InputWithLengthConstraintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithLengthConstraintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithLengthConstraintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
