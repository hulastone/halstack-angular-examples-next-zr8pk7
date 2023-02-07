import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSelectComponent } from './error-select.component';

describe('ErrorSelectComponent', () => {
  let component: ErrorSelectComponent;
  let fixture: ComponentFixture<ErrorSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
