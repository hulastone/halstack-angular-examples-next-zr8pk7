import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeterminateDefaultProgressBarComponent } from './determinate-default-progress-bar.component';

describe('DeterminateDefaultProgressBarComponent', () => {
  let component: DeterminateDefaultProgressBarComponent;
  let fixture: ComponentFixture<DeterminateDefaultProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeterminateDefaultProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeterminateDefaultProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
