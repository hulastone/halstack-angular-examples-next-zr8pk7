import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledSliderComponent } from './disabled-slider.component';

describe('DisabledSliderComponent', () => {
  let component: DisabledSliderComponent;
  let fixture: ComponentFixture<DisabledSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
