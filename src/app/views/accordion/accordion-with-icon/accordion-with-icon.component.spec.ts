import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionWithIconComponent } from './accordion-with-icon.component';

describe('AccordionWithIconComponent', () => {
  let component: AccordionWithIconComponent;
  let fixture: ComponentFixture<AccordionWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionWithIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
