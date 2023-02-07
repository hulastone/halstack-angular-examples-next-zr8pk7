import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithPlaceholderComponent } from './input-with-placeholder.component';

describe('InputWithPlaceholderComponent', () => {
  let component: InputWithPlaceholderComponent;
  let fixture: ComponentFixture<InputWithPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
