import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomErrorPasswordComponent } from './custom-error-password.component';

describe('CustomErrorPasswordComponent', () => {
  let component: CustomErrorPasswordComponent;
  let fixture: ComponentFixture<CustomErrorPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomErrorPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomErrorPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
