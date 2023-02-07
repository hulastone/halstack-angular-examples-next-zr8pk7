import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalTextareaComponent } from './optional-textarea.component';

describe('OptionalTextareaComponent', () => {
  let component: OptionalTextareaComponent;
  let fixture: ComponentFixture<OptionalTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
