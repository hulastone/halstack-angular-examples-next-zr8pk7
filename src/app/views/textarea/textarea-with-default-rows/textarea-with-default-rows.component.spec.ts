import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaWithDefaultRowsComponent } from './textarea-with-default-rows.component';

describe('TextareaWithDefaultRowsComponent', () => {
  let component: TextareaWithDefaultRowsComponent;
  let fixture: ComponentFixture<TextareaWithDefaultRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaWithDefaultRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaWithDefaultRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
