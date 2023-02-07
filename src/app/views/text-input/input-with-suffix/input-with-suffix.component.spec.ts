import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithSuffixComponent } from './input-with-suffix.component';

describe('InputWithSuffixComponent', () => {
  let component: InputWithSuffixComponent;
  let fixture: ComponentFixture<InputWithSuffixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithSuffixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
