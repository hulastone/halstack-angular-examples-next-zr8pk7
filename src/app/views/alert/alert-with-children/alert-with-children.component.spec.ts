import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertWithChildrenComponent } from './alert-with-children.component';

describe('AlertWithChildrenComponent', () => {
  let component: AlertWithChildrenComponent;
  let fixture: ComponentFixture<AlertWithChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertWithChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertWithChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
