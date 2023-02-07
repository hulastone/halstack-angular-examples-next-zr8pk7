import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledTabsComponent } from './uncontrolled-tabs.component';

describe('UncontrolledTabsComponent', () => {
  let component: UncontrolledTabsComponent;
  let fixture: ComponentFixture<UncontrolledTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncontrolledTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncontrolledTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
