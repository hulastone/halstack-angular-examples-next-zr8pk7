import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthConstraintPasswordComponent } from './length-constraint-password.component';

describe('LengthConstraintPasswordComponent', () => {
  let component: LengthConstraintPasswordComponent;
  let fixture: ComponentFixture<LengthConstraintPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthConstraintPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthConstraintPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
