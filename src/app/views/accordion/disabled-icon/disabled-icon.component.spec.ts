import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledIconComponent } from './disabled-icon.component';

describe('DisabledIconComponent', () => {
  let component: DisabledIconComponent;
  let fixture: ComponentFixture<DisabledIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
