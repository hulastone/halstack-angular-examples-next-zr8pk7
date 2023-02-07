import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileInputModesComponent } from './file-input-modes.component';

describe('FileInputModesComponent', () => {
  let component: FileInputModesComponent;
  let fixture: ComponentFixture<FileInputModesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileInputModesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInputModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
