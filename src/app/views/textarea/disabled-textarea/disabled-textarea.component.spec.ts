import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledTextareaComponent } from './disabled-textarea.component';

describe('DisabledTextareaComponent', () => {
  let component: DisabledTextareaComponent;
  let fixture: ComponentFixture<DisabledTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
