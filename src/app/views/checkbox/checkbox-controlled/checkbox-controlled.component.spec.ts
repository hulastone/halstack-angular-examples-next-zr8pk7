import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxControlledComponent } from './checkbox-controlled.component';

describe('CheckboxControlledComponent', () => {
  let component: CheckboxControlledComponent;
  let fixture: ComponentFixture<CheckboxControlledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxControlledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxControlledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
