import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledPasswordComponent } from './controlled-password.component';

describe('ControlledPasswordComponent', () => {
  let component: ControlledPasswordComponent;
  let fixture: ComponentFixture<ControlledPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
