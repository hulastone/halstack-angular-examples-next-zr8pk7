import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerWithOverlayComponent } from './spinner-with-overlay.component';

describe('SpinnerWithOverlayComponent', () => {
  let component: SpinnerWithOverlayComponent;
  let fixture: ComponentFixture<SpinnerWithOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerWithOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerWithOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
