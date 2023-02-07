import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedDateComponent } from './sized-date.component';

describe('SizedDateComponent', () => {
  let component: SizedDateComponent;
  let fixture: ComponentFixture<SizedDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizedDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
