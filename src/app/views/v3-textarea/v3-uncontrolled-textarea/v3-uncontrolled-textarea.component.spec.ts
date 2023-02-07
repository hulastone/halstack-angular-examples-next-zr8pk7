import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3UncontrolledTextareaComponent } from './v3-uncontrolled-textarea.component';

describe('V3UncontrolledTextareaComponent', () => {
  let component: V3UncontrolledTextareaComponent;
  let fixture: ComponentFixture<V3UncontrolledTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3UncontrolledTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3UncontrolledTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
