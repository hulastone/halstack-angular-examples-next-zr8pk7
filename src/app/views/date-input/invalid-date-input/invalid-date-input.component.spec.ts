import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidDateInputComponent } from './invalid-date-input.component';

describe('InvalidDateInputComponent', () => {
  let component: InvalidDateInputComponent;
  let fixture: ComponentFixture<InvalidDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidDateInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
