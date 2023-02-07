import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillParentSizeInputComponent } from './fill-parent-size-input.component';

describe('FillParentSizeInputComponent', () => {
  let component: FillParentSizeInputComponent;
  let fixture: ComponentFixture<FillParentSizeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillParentSizeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillParentSizeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
