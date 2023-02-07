import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagWithLinkComponent } from './tag-with-link.component';

describe('TagWithLinkComponent', () => {
  let component: TagWithLinkComponent;
  let fixture: ComponentFixture<TagWithLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagWithLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagWithLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
