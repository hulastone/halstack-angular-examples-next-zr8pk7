import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaWithCustomErrorComponent } from './textarea-with-custom-error.component';

describe('TextareaWithCustomErrorComponent', () => {
  let component: TextareaWithCustomErrorComponent;
  let fixture: ComponentFixture<TextareaWithCustomErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaWithCustomErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaWithCustomErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
