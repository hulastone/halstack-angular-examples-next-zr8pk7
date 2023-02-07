import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3InvalidTextareaComponent } from './v3-invalid-textarea.component';

describe('V3InvalidTextareaComponent', () => {
  let component: V3InvalidTextareaComponent;
  let fixture: ComponentFixture<V3InvalidTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3InvalidTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3InvalidTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
