import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillParentButtonComponent } from './fill-parent-button.component';

describe('FillParentButtonComponent', () => {
  let component: FillParentButtonComponent;
  let fixture: ComponentFixture<FillParentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillParentButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillParentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
