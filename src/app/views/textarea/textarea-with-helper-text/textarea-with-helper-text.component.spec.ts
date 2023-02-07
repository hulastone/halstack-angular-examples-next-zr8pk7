import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaWithHelperTextComponent } from './textarea-with-helper-text.component';

describe('TextareaWithHelperTextComponent', () => {
  let component: TextareaWithHelperTextComponent;
  let fixture: ComponentFixture<TextareaWithHelperTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaWithHelperTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaWithHelperTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
