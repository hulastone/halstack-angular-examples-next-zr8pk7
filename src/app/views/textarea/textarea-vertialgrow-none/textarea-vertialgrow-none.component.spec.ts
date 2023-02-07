import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaVertialgrowNoneComponent } from './textarea-vertialgrow-none.component';

describe('TextareaVertialgrowNoneComponent', () => {
  let component: TextareaVertialgrowNoneComponent;
  let fixture: ComponentFixture<TextareaVertialgrowNoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaVertialgrowNoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaVertialgrowNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
