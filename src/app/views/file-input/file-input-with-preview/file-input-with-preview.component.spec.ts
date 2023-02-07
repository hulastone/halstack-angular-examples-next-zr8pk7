import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileInputWithPreviewComponent } from './file-input-with-preview.component';

describe('FileInputWithPreviewComponent', () => {
  let component: FileInputWithPreviewComponent;
  let fixture: ComponentFixture<FileInputWithPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileInputWithPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInputWithPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
