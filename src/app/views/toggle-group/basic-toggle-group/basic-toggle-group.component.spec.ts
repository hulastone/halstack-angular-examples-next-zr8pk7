import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicToggleGroupComponent } from './basic-toggle-group.component';

describe('BasicToggleGroupComponent', () => {
  let component: BasicToggleGroupComponent;
  let fixture: ComponentFixture<BasicToggleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicToggleGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicToggleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
