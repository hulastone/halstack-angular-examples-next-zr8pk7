import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFileInputComponent } from './default-file-input.component';

describe('DefaultFileInputComponent', () => {
  let component: DefaultFileInputComponent;
  let fixture: ComponentFixture<DefaultFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultFileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
