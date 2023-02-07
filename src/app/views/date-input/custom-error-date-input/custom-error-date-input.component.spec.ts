import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomErrorDateInputComponent } from './custom-error-date-input.component';

describe('CustomErrorDateInputComponent', () => {
  let component: CustomErrorDateInputComponent;
  let fixture: ComponentFixture<CustomErrorDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomErrorDateInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomErrorDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
