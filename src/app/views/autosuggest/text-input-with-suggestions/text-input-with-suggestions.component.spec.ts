import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputWithSuggestionsComponent } from './text-input-with-suggestions.component';

describe('TextInputWithSuggestionsComponent', () => {
  let component: TextInputWithSuggestionsComponent;
  let fixture: ComponentFixture<TextInputWithSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputWithSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputWithSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
