import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleToggleGroupComponent } from './multiple-toggle-group.component';

describe('MultipleToggleGroupComponent', () => {
  let component: MultipleToggleGroupComponent;
  let fixture: ComponentFixture<MultipleToggleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleToggleGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleToggleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
