import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderNoLimitValuesComponent } from './slider-no-limit-values.component';

describe('SliderNoLimitValuesComponent', () => {
  let component: SliderNoLimitValuesComponent;
  let fixture: ComponentFixture<SliderNoLimitValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderNoLimitValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderNoLimitValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
