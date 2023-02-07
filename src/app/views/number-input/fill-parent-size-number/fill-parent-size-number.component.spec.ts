import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillParentSizeNumberComponent } from './fill-parent-size-number.component';

describe('FillParentSizeNumberComponent', () => {
  let component: FillParentSizeNumberComponent;
  let fixture: ComponentFixture<FillParentSizeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillParentSizeNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillParentSizeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
