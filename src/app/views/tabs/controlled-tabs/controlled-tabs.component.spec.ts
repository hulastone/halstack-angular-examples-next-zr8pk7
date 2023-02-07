import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledTabsComponent } from './controlled-tabs.component';

describe('ControlledTabsComponent', () => {
  let component: ControlledTabsComponent;
  let fixture: ComponentFixture<ControlledTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
