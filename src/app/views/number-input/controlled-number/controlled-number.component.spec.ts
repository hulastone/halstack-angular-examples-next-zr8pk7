import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledNumberComponent } from './controlled-number.component';

describe('ControlledNumberComponent', () => {
  let component: ControlledNumberComponent;
  let fixture: ComponentFixture<ControlledNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
