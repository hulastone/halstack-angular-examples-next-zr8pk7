import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedInputTextComponent } from './sized-input-text.component';

describe('SizedInputTextComponent', () => {
  let component: SizedInputTextComponent;
  let fixture: ComponentFixture<SizedInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizedInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
