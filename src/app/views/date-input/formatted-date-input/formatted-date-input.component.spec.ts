import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattedDateInputComponent } from './formatted-date-input.component';

describe('FormattedDateInputComponent', () => {
  let component: FormattedDateInputComponent;
  let fixture: ComponentFixture<FormattedDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormattedDateInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattedDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
