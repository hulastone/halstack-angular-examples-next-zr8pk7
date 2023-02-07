import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMultipleSelectComponent } from './error-multiple-select.component';

describe('ErrorMultipleSelectComponent', () => {
  let component: ErrorMultipleSelectComponent;
  let fixture: ComponentFixture<ErrorMultipleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMultipleSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMultipleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
