import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndecoratedLinkWithNewWindowComponent } from './undecorated-link-with-new-window.component';

describe('UndecoratedLinkWithNewWindowComponent', () => {
  let component: UndecoratedLinkWithNewWindowComponent;
  let fixture: ComponentFixture<UndecoratedLinkWithNewWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndecoratedLinkWithNewWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndecoratedLinkWithNewWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
