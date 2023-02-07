import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownWithIconsComponent } from './dropdown-with-icons.component';

describe('DropdownWithIconsComponent', () => {
  let component: DropdownWithIconsComponent;
  let fixture: ComponentFixture<DropdownWithIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownWithIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownWithIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
