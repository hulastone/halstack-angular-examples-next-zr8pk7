import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V3WithIconsSelectComponent } from './v3-with-icons-select.component';

describe('V3WithIconsSelectComponent', () => {
  let component: V3WithIconsSelectComponent;
  let fixture: ComponentFixture<V3WithIconsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V3WithIconsSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V3WithIconsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
