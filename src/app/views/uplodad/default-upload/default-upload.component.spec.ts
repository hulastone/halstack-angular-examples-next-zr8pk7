import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultUploadComponent } from './default-upload.component';

describe('DefaultUploadComponent', () => {
  let component: DefaultUploadComponent;
  let fixture: ComponentFixture<DefaultUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
