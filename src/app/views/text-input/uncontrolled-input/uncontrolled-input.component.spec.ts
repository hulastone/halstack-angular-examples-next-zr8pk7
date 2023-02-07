import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledInputComponent } from './uncontrolled-input.component';

describe('UncontrolledInputComponent', () => {
  let component: UncontrolledInputComponent;
  let fixture: ComponentFixture<UncontrolledInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncontrolledInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncontrolledInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
