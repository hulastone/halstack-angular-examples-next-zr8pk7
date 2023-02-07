import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffixNumberComponent } from './suffix-number.component';

describe('SuffixNumberComponent', () => {
  let component: SuffixNumberComponent;
  let fixture: ComponentFixture<SuffixNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuffixNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuffixNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
