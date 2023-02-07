import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3UncontrolledSelectComponent } from './v3-uncontrolled-select.component';

describe('V3UncontrolledSelectComponent', () => {
  let component: V3UncontrolledSelectComponent;
  let fixture: ComponentFixture<V3UncontrolledSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3UncontrolledSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3UncontrolledSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
