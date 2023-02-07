import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidNumberComponent } from './invalid-number.component';

describe('InvalidNumberComponent', () => {
  let component: InvalidNumberComponent;
  let fixture: ComponentFixture<InvalidNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
