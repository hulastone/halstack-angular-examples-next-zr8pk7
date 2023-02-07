import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelPositionSwitchComponent } from './label-position-switch.component';

describe('LabelPositionSwitchComponent', () => {
  let component: LabelPositionSwitchComponent;
  let fixture: ComponentFixture<LabelPositionSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelPositionSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelPositionSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
