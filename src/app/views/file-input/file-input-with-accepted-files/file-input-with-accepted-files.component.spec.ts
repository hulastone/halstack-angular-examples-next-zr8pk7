import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileInputWithAcceptedFilesComponent } from './file-input-with-accepted-files.component';

describe('FileInputWithAcceptedFilesComponent', () => {
  let component: FileInputWithAcceptedFilesComponent;
  let fixture: ComponentFixture<FileInputWithAcceptedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileInputWithAcceptedFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInputWithAcceptedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
