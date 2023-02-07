import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledDateComponent } from './controlled-date.component';

describe('ControlledDateComponent', () => {
  let component: ControlledDateComponent;
  let fixture: ComponentFixture<ControlledDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
