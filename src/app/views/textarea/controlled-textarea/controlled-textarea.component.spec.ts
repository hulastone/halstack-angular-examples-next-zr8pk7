import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledTextareaComponent } from './controlled-textarea.component';

describe('ControlledTextareaComponent', () => {
  let component: ControlledTextareaComponent;
  let fixture: ComponentFixture<ControlledTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
