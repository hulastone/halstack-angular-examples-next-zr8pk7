import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosableInlineAlertComponent } from './closable-inline-alert.component';

describe('ClosableInlineAlertComponent', () => {
  let component: ClosableInlineAlertComponent;
  let fixture: ComponentFixture<ClosableInlineAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosableInlineAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosableInlineAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
