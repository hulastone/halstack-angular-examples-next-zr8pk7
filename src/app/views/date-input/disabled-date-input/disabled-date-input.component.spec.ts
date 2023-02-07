import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledDateInputComponent } from './disabled-date-input.component';

describe('DisabledDateInputComponent', () => {
  let component: DisabledDateInputComponent;
  let fixture: ComponentFixture<DisabledDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledDateInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
