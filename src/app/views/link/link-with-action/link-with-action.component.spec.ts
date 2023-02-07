import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkWithActionComponent } from './link-with-action.component';

describe('LinkWithActionComponent', () => {
  let component: LinkWithActionComponent;
  let fixture: ComponentFixture<LinkWithActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkWithActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkWithActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
