import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderNumberComponent } from './placeholder-number.component';

describe('PlaceholderNumberComponent', () => {
  let component: PlaceholderNumberComponent;
  let fixture: ComponentFixture<PlaceholderNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
