import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputFunctionSuggestionsComponent } from './text-input-function-suggestions.component';

describe('TextInputFunctionSuggestionsComponent', () => {
  let component: TextInputFunctionSuggestionsComponent;
  let fixture: ComponentFixture<TextInputFunctionSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputFunctionSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputFunctionSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
