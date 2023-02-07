import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedSliderComponent } from './sized-slider.component';

describe('SizedSliderComponent', () => {
  let component: SizedSliderComponent;
  let fixture: ComponentFixture<SizedSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizedSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
