import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioControlledComponent } from './radio-controlled.component';

describe('RadioControlledComponent', () => {
  let component: RadioControlledComponent;
  let fixture: ComponentFixture<RadioControlledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioControlledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioControlledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
