import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3SizedSelectComponent } from './v3-sized-select.component';

describe('V3SizedSelectComponent', () => {
  let component: V3SizedSelectComponent;
  let fixture: ComponentFixture<V3SizedSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3SizedSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3SizedSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
