import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperTextNumberComponent } from './helper-text-number.component';

describe('HelperTextNumberComponent', () => {
  let component: HelperTextNumberComponent;
  let fixture: ComponentFixture<HelperTextNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelperTextNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperTextNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
