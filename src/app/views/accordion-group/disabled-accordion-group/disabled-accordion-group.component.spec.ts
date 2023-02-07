import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledAccordionGroupComponent } from './disabled-accordion-group.component';

describe('DisabledAccordionGroupComponent', () => {
  let component: DisabledAccordionGroupComponent;
  let fixture: ComponentFixture<DisabledAccordionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledAccordionGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledAccordionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
