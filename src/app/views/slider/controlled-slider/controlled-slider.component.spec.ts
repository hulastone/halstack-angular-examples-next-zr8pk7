import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledSliderComponent } from './controlled-slider.component';

describe('ControlledSliderComponent', () => {
  let component: ControlledSliderComponent;
  let fixture: ComponentFixture<ControlledSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
