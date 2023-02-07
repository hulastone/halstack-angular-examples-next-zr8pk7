import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTabbedSectionComponent } from './default-tabbed-section.component';

describe('DefaultTabbedSectionComponent', () => {
  let component: DefaultTabbedSectionComponent;
  let fixture: ComponentFixture<DefaultTabbedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultTabbedSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTabbedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
