import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3RequiredTextareaComponent } from './v3-required-textarea.component';

describe('V3RequiredTextareaComponent', () => {
  let component: V3RequiredTextareaComponent;
  let fixture: ComponentFixture<V3RequiredTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3RequiredTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3RequiredTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
