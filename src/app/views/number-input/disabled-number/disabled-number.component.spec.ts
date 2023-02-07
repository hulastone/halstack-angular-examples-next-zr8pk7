import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledNumberComponent } from './disabled-number.component';

describe('DisabledNumberComponent', () => {
  let component: DisabledNumberComponent;
  let fixture: ComponentFixture<DisabledNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
