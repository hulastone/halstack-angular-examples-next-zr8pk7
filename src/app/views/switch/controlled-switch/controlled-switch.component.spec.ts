import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledSwitchComponent } from './controlled-switch.component';

describe('ControlledSwitchComponent', () => {
  let component: ControlledSwitchComponent;
  let fixture: ComponentFixture<ControlledSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
