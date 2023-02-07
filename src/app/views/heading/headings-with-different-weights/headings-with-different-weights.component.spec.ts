import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingsWithDifferentWeightsComponent } from './headings-with-different-weights.component';

describe('HeadingsWithDifferentWeightsComponent', () => {
  let component: HeadingsWithDifferentWeightsComponent;
  let fixture: ComponentFixture<HeadingsWithDifferentWeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingsWithDifferentWeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingsWithDifferentWeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
