import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileInputWithErrorComponent } from './file-input-with-error.component';

describe('FileInputWithErrorComponent', () => {
  let component: FileInputWithErrorComponent;
  let fixture: ComponentFixture<FileInputWithErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileInputWithErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInputWithErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
