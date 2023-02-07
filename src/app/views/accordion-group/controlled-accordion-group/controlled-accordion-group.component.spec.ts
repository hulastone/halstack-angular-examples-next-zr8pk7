import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledAccordionGroupComponent } from './controlled-accordion-group.component';

describe('ControlledAccordionGroupComponent', () => {
  let component: ControlledAccordionGroupComponent;
  let fixture: ComponentFixture<ControlledAccordionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledAccordionGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledAccordionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
