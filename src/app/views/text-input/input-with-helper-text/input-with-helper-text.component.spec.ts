import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithHelperTextComponent } from './input-with-helper-text.component';

describe('InputWithHelperTextComponent', () => {
  let component: InputWithHelperTextComponent;
  let fixture: ComponentFixture<InputWithHelperTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithHelperTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithHelperTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
