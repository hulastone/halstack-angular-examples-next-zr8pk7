import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalDateInputComponent } from './optional-date-input.component';

describe('OptionalDateInputComponent', () => {
  let component: OptionalDateInputComponent;
  let fixture: ComponentFixture<OptionalDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalDateInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
