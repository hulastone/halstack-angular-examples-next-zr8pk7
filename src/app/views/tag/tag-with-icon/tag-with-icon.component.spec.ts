import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagWithIconComponent } from './tag-with-icon.component';

describe('TagWithIconComponent', () => {
  let component: TagWithIconComponent;
  let fixture: ComponentFixture<TagWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagWithIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
