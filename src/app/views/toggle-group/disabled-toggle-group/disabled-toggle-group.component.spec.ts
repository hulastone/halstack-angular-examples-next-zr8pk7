import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledToggleGroupComponent } from './disabled-toggle-group.component';

describe('DisabledToggleGroupComponent', () => {
  let component: DisabledToggleGroupComponent;
  let fixture: ComponentFixture<DisabledToggleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledToggleGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledToggleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
