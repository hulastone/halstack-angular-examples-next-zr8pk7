import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminedSpinnerComponent } from './determined-spinner.component';

describe('DeterminedSpinnerComponent', () => {
  let component: DeterminedSpinnerComponent;
  let fixture: ComponentFixture<DeterminedSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeterminedSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeterminedSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
