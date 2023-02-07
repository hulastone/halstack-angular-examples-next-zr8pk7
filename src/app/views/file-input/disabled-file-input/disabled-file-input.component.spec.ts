import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledFileInputComponent } from './disabled-file-input.component';

describe('DisabledFileInputComponent', () => {
  let component: DisabledFileInputComponent;
  let fixture: ComponentFixture<DisabledFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledFileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
