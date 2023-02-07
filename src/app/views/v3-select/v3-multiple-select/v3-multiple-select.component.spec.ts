import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3MultipleSelectComponent } from './v3-multiple-select.component';

describe('V3MultipleSelectComponent', () => {
  let component: V3MultipleSelectComponent;
  let fixture: ComponentFixture<V3MultipleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3MultipleSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3MultipleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
