import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3ControlledSelectComponent } from './v3-controlled-select.component';

describe('V3ControlledSelectComponent', () => {
  let component: V3ControlledSelectComponent;
  let fixture: ComponentFixture<V3ControlledSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3ControlledSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3ControlledSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
