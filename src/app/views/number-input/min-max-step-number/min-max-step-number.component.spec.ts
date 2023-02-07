import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxStepNumberComponent } from './min-max-step-number.component';

describe('MinMaxStepNumberComponent', () => {
  let component: MinMaxStepNumberComponent;
  let fixture: ComponentFixture<MinMaxStepNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinMaxStepNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinMaxStepNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
