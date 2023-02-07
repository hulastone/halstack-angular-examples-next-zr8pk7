import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillParentSizePasswordComponent } from './fill-parent-size-password.component';

describe('FillParentSizePasswordComponent', () => {
  let component: FillParentSizePasswordComponent;
  let fixture: ComponentFixture<FillParentSizePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillParentSizePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillParentSizePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
