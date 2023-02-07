import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledWizardComponent } from './uncontrolled-wizard.component';

describe('UncontrolledWizardComponent', () => {
  let component: UncontrolledWizardComponent;
  let fixture: ComponentFixture<UncontrolledWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncontrolledWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncontrolledWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
