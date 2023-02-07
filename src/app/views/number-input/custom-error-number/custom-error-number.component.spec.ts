import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomErrorNumberComponent } from './custom-error-number.component';

describe('CustomErrorNumberComponent', () => {
  let component: CustomErrorNumberComponent;
  let fixture: ComponentFixture<CustomErrorNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomErrorNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomErrorNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
