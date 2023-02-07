import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavWithChildrenComponent } from './sidenav-with-children.component';

describe('SidenavWithChildrenComponent', () => {
  let component: SidenavWithChildrenComponent;
  let fixture: ComponentFixture<SidenavWithChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavWithChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavWithChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
