import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultDropdownExpandOnHoverComponent } from './default-dropdown-expand-on-hover.component';

describe('DefaultDropdownExpandOnHoverComponent', () => {
  let component: DefaultDropdownExpandOnHoverComponent;
  let fixture: ComponentFixture<DefaultDropdownExpandOnHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultDropdownExpandOnHoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDropdownExpandOnHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
