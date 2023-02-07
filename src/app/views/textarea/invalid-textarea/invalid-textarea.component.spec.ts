import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidTextareaComponent } from './invalid-textarea.component';

describe('InvalidTextareaComponent', () => {
  let component: InvalidTextareaComponent;
  let fixture: ComponentFixture<InvalidTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
