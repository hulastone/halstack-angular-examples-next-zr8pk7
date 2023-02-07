import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledAccordionGroupComponent } from './uncontrolled-accordion-group.component';

describe('UncontrolledAccordionGroupComponent', () => {
  let component: UncontrolledAccordionGroupComponent;
  let fixture: ComponentFixture<UncontrolledAccordionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncontrolledAccordionGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncontrolledAccordionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
