import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalInputComponent } from './optional-input.component';

describe('OptionalInputComponent', () => {
  let component: OptionalInputComponent;
  let fixture: ComponentFixture<OptionalInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
