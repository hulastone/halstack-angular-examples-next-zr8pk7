import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillParentSizedDateInputComponent } from './fill-parent-sized-date-input.component';

describe('FillParentSizedDateInputComponent', () => {
  let component: FillParentSizedDateInputComponent;
  let fixture: ComponentFixture<FillParentSizedDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillParentSizedDateInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillParentSizedDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
