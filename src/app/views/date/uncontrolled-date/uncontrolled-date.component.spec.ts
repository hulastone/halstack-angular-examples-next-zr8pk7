import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledDateComponent } from './uncontrolled-date.component';

describe('UncontrolledDateComponent', () => {
  let component: UncontrolledDateComponent;
  let fixture: ComponentFixture<UncontrolledDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncontrolledDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncontrolledDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
