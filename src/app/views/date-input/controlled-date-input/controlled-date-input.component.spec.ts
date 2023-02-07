import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledDateInputComponent } from './controlled-date-input.component';

describe('ControlledDateInputComponent', () => {
  let component: ControlledDateInputComponent;
  let fixture: ComponentFixture<ControlledDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledDateInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
