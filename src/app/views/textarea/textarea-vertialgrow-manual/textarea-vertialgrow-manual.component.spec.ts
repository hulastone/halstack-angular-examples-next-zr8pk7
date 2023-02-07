import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaVertialgrowManualComponent } from './textarea-vertialgrow-manual.component';

describe('TextareaVertialgrowManualComponent', () => {
  let component: TextareaVertialgrowManualComponent;
  let fixture: ComponentFixture<TextareaVertialgrowManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaVertialgrowManualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaVertialgrowManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
