import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionWithAssistiveTextComponent } from './accordion-with-assistive-text.component';

describe('AccordionWithAssistiveTextComponent', () => {
  let component: AccordionWithAssistiveTextComponent;
  let fixture: ComponentFixture<AccordionWithAssistiveTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionWithAssistiveTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionWithAssistiveTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
