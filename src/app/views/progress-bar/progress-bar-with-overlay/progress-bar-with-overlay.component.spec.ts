import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarWithOverlayComponent } from './progress-bar-with-overlay.component';

describe('ProgressBarWithOverlayComponent', () => {
  let component: ProgressBarWithOverlayComponent;
  let fixture: ComponentFixture<ProgressBarWithOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarWithOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarWithOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
