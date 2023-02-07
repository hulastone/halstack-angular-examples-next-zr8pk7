import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternConstraintPasswordComponent } from './pattern-constraint-password.component';

describe('PatternConstraintPasswordComponent', () => {
  let component: PatternConstraintPasswordComponent;
  let fixture: ComponentFixture<PatternConstraintPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternConstraintPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternConstraintPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
