import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledInputTextComponent } from './controlled-input-text.component';

describe('ControlledInputTextComponent', () => {
  let component: ControlledInputTextComponent;
  let fixture: ComponentFixture<ControlledInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
