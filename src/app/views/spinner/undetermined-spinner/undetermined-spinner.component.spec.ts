import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndeterminedSpinnerComponent } from './undetermined-spinner.component';

describe('UndeterminedSpinnerComponent', () => {
  let component: UndeterminedSpinnerComponent;
  let fixture: ComponentFixture<UndeterminedSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndeterminedSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndeterminedSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
