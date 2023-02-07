import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledDateInputComponent } from './uncontrolled-date-input.component';

describe('UncontrolledDateInputComponent', () => {
  let component: UncontrolledDateInputComponent;
  let fixture: ComponentFixture<UncontrolledDateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncontrolledDateInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncontrolledDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
