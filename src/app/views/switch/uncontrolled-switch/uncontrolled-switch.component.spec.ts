import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledSwitchComponent } from './uncontrolled-switch.component';

describe('UncontrolledSwitchComponent', () => {
  let component: UncontrolledSwitchComponent;
  let fixture: ComponentFixture<UncontrolledSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncontrolledSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncontrolledSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
