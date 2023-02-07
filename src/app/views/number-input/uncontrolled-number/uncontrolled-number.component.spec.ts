import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncontrolledNumberComponent } from './uncontrolled-number.component';

describe('UncontrolledNumberComponent', () => {
  let component: UncontrolledNumberComponent;
  let fixture: ComponentFixture<UncontrolledNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncontrolledNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UncontrolledNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
