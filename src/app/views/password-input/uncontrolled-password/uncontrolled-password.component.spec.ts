import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledPasswordComponent } from './uncontrolled-password.component';

describe('UncontrolledPasswordComponent', () => {
  let component: UncontrolledPasswordComponent;
  let fixture: ComponentFixture<UncontrolledPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncontrolledPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncontrolledPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
