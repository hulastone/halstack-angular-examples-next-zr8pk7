import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileInputWithOneFileComponent } from './file-input-with-one-file.component';

describe('FileInputWithOneFileComponent', () => {
  let component: FileInputWithOneFileComponent;
  let fixture: ComponentFixture<FileInputWithOneFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileInputWithOneFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInputWithOneFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
