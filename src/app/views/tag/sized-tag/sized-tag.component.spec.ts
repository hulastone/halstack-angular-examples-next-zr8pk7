import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedTagComponent } from './sized-tag.component';

describe('SizedTagComponent', () => {
  let component: SizedTagComponent;
  let fixture: ComponentFixture<SizedTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizedTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
