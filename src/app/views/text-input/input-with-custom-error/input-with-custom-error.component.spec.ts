import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithCustomErrorComponent } from './input-with-custom-error.component';

describe('InputWithCustomErrorComponent', () => {
  let component: InputWithCustomErrorComponent;
  let fixture: ComponentFixture<InputWithCustomErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithCustomErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithCustomErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
