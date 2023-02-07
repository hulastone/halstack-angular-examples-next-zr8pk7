import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWithHelperComponent } from './date-with-helper.component';

describe('DateWithHelperComponent', () => {
  let component: DateWithHelperComponent;
  let fixture: ComponentFixture<DateWithHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateWithHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWithHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
