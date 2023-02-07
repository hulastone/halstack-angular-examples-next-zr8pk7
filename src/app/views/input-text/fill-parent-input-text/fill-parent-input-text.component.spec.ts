import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillParentInputTextComponent } from './fill-parent-input-text.component';

describe('FillParentInputTextComponent', () => {
  let component: FillParentInputTextComponent;
  let fixture: ComponentFixture<FillParentInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillParentInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillParentInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
