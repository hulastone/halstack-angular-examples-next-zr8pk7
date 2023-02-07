import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3FillParentTextareaComponent } from './v3-fill-parent-textarea.component';

describe('V3FillParentTextareaComponent', () => {
  let component: V3FillParentTextareaComponent;
  let fixture: ComponentFixture<V3FillParentTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3FillParentTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3FillParentTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
