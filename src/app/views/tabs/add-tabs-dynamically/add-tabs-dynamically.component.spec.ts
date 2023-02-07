import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTabsDynamicallyComponent } from './add-tabs-dynamically.component';

describe('AddTabsDynamicallyComponent', () => {
  let component: AddTabsDynamicallyComponent;
  let fixture: ComponentFixture<AddTabsDynamicallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTabsDynamicallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTabsDynamicallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
