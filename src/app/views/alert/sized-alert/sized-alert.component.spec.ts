import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedAlertComponent } from './sized-alert.component';

describe('SizedAlertComponent', () => {
  let component: SizedAlertComponent;
  let fixture: ComponentFixture<SizedAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizedAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
