import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalWizardComponent } from './vertical-wizard.component';

describe('VerticalWizardComponent', () => {
  let component: VerticalWizardComponent;
  let fixture: ComponentFixture<VerticalWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
