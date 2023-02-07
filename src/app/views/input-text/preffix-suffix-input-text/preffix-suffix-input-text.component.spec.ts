import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreffixSuffixInputTextComponent } from './preffix-suffix-input-text.component';

describe('PreffixSuffixInputTextComponent', () => {
  let component: PreffixSuffixInputTextComponent;
  let fixture: ComponentFixture<PreffixSuffixInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreffixSuffixInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreffixSuffixInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
