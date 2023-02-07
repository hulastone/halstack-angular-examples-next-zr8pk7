import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3DisabledTextareaComponent } from './v3-disabled-textarea.component';

describe('V3DisabledTextareaComponent', () => {
  let component: V3DisabledTextareaComponent;
  let fixture: ComponentFixture<V3DisabledTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3DisabledTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3DisabledTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
