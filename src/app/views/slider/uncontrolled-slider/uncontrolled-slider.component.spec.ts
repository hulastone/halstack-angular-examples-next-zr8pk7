import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledSliderComponent } from './uncontrolled-slider.component';

describe('UncontrolledSliderComponent', () => {
  let component: UncontrolledSliderComponent;
  let fixture: ComponentFixture<UncontrolledSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncontrolledSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncontrolledSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
