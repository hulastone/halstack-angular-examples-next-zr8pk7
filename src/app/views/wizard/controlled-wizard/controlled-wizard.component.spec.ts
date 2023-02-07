import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledWizardComponent } from './controlled-wizard.component';

describe('ControlledWizardComponent', () => {
  let component: ControlledWizardComponent;
  let fixture: ComponentFixture<ControlledWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
