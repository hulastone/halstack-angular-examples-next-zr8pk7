import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithDropdownComponent } from './header-with-dropdown.component';

describe('HeaderWithDropdownComponent', () => {
  let component: HeaderWithDropdownComponent;
  let fixture: ComponentFixture<HeaderWithDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWithDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
