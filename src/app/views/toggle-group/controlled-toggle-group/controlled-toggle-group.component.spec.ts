import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledToggleGroupComponent } from './controlled-toggle-group.component';

describe('ControlledToggleGroupComponent', () => {
  let component: ControlledToggleGroupComponent;
  let fixture: ComponentFixture<ControlledToggleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledToggleGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledToggleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
