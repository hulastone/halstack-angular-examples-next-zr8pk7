import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledTextareaComponent } from './uncontrolled-textarea.component';

describe('UncontrolledTextareaComponent', () => {
  let component: UncontrolledTextareaComponent;
  let fixture: ComponentFixture<UncontrolledTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncontrolledTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncontrolledTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
