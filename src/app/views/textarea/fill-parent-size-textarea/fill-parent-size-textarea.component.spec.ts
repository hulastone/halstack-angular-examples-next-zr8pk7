import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillParentSizeTextareaComponent } from './fill-parent-size-textarea.component';

describe('FillParentSizeTextareaComponent', () => {
  let component: FillParentSizeTextareaComponent;
  let fixture: ComponentFixture<FillParentSizeTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillParentSizeTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillParentSizeTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
