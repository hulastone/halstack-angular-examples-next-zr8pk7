import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndeterminateDefaultProgressBarComponent } from './undeterminate-default-progress-bar.component';

describe('UndeterminateDefaultProgressBarComponent', () => {
  let component: UndeterminateDefaultProgressBarComponent;
  let fixture: ComponentFixture<UndeterminateDefaultProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndeterminateDefaultProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndeterminateDefaultProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
