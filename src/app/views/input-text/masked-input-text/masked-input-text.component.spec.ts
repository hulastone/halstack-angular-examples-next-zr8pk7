import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskedInputTextComponent } from './masked-input-text.component';

describe('MaskedInputTextComponent', () => {
  let component: MaskedInputTextComponent;
  let fixture: ComponentFixture<MaskedInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskedInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskedInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
