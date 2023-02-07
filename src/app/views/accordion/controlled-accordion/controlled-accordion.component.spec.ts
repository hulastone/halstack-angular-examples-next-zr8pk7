import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledAccordionComponent } from './controlled-accordion.component';

describe('ControlledAccordionComponent', () => {
  let component: ControlledAccordionComponent;
  let fixture: ComponentFixture<ControlledAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
