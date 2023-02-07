import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3ControlledTextareaComponent } from './v3-controlled-textarea.component';

describe('V3ControlledTextareaComponent', () => {
  let component: V3ControlledTextareaComponent;
  let fixture: ComponentFixture<V3ControlledTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3ControlledTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3ControlledTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
