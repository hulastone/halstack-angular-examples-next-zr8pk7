import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaWithPlaceholderComponent } from './textarea-with-placeholder.component';

describe('TextareaWithPlaceholderComponent', () => {
  let component: TextareaWithPlaceholderComponent;
  let fixture: ComponentFixture<TextareaWithPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaWithPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaWithPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
