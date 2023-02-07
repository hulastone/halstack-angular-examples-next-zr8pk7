import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledLinkComponent } from './disabled-link.component';

describe('DisabledLinkComponent', () => {
  let component: DisabledLinkComponent;
  let fixture: ComponentFixture<DisabledLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
